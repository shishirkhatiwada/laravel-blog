import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Welcome({ posts, auth }) {
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Welcome" />
            
            <div className="min-h-screen bg-gray-100">
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-3xl font-bold">Latest Posts</h1>
                        </div>

                        <div className="space-y-6">
                            {posts.data.map(post => (
                                <div key={post.id} className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-6">
                                        <Link
                                            href={route('posts.show', { id: post.id })}
                                            className="text-xl font-bold hover:text-blue-600"
                                        >
                                            {post.title}
                                        </Link>
                                        <p className="text-gray-600 text-sm mt-2">
                                            By {post.user.name} • {post.comments_count} comments • {post.likes_count} likes
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination links */}
                        <div className="mt-6">
                            {posts.links && posts.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url || '#'}
                                    className={`px-3 py-1 mx-1 ${
                                        link.active ? 'bg-blue-500 text-white' : 'text-gray-700'
                                    }`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
