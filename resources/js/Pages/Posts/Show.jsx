import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import toast from 'react-hot-toast';

export default function Show({ auth, post }) {
    const [showCommentForm, setShowCommentForm] = useState(false);
    
    const { data, setData, post: submitComment, processing: commentProcessing, reset } = useForm({
        content: '',
    });

    const { post: submitLike, processing: likeProcessing } = useForm();

    const handleComment = (e) => {
        e.preventDefault();
        
        if (!data.content.trim()) {
            toast.error('Cannot post blank comment');
            return;
        }

        submitComment(route('posts.comments.store', post.id), {
            onSuccess: () => {
                toast.success('Comment posted successfully!');
                setData('content', '');
                setShowCommentForm(false);
                reset();
            },
            onError: () => {
                toast.error('Failed to post comment');
            }
        });
    };

    const handleLike = () => {
        submitLike(route('posts.likes.toggle', post.id), {
            onSuccess: () => {
                toast.success(post.is_liked ? 'Post unliked' : 'Post liked');
            },
            onError: () => {
                toast.error('Failed to process like');
            }
        });
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="text-xl">{post.title}</h2>}
        >
            <Head title={post.title} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <div className="mb-4">
                                <p className="text-gray-600 text-sm">
                                    By {post.user.name}
                                </p>
                            </div>
                            <div 
                                className="prose max-w-none mb-6"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                            
                            {/* Like Button */}
                            <button
                                onClick={handleLike}
                                disabled={likeProcessing}
                                className={`px-4 py-2 rounded ${
                                    post.is_liked ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                }`}
                            >
                                {post.likes_count} Likes
                            </button>

                            {/* Comments Section */}
                            <div className="mt-8">
                                <h3 className="text-lg font-bold mb-4">Comments ({post.comments_count})</h3>
                                
                                <button
                                    onClick={() => setShowCommentForm(!showCommentForm)}
                                    className="mb-4 text-blue-500 hover:text-blue-700"
                                >
                                    Add Comment
                                </button>

                                {showCommentForm && (
                                    <form onSubmit={handleComment} className="mb-6">
                                        <textarea
                                            value={data.content}
                                            onChange={e => setData('content', e.target.value)}
                                            className="w-full border rounded p-2"
                                            rows="3"
                                            placeholder="Write your comment..."
                                        />
                                        <button
                                            type="submit"
                                            disabled={commentProcessing}
                                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                                        >
                                            Post Comment
                                        </button>
                                    </form>
                                )}

                                <div className="space-y-4">
                                    {post.comments.map(comment => (
                                        <div key={comment.id} className="border-b pb-4">
                                            <p className="text-gray-600 text-sm mb-1">
                                                {comment.user.name} commented:
                                            </p>
                                            <p>{comment.content}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
} 