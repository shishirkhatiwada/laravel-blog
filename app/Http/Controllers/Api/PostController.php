<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Events\PostLiked;
use App\Events\PostCommented;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        return Post::with('user')
            ->withCount(['comments', 'likes'])
            ->latest()
            ->paginate(10);
    }

    public function like(Post $post)
    {
        $like = $post->likes()->where('user_id', auth()->id())->first();

        if ($like) {
            $like->delete();
            return response()->json(['liked' => false]);
        }

        $post->likes()->create([
            'user_id' => auth()->id()
        ]);

        event(new PostLiked($post, auth()->user()));

        return response()->json(['liked' => true]);
    }

    public function comment(Request $request, Post $post)
    {
        $validated = $request->validate([
            'content' => 'required|string|max:1000'
        ]);

        $comment = $post->comments()->create([
            'content' => $validated['content'],
            'user_id' => auth()->id()
        ]);

        event(new PostCommented($post, auth()->user(), $comment));

        return response()->json($comment->load('user'));
    }
} 