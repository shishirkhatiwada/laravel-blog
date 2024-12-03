<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;
use Inertia\Inertia;
use App\Events\PostLiked;
use App\Events\PostCommented;

class PostController extends Controller
{
    public function index(): Response
    {
        $posts = Post::with(['user', 'comments.user', 'likes'])
            ->withCount(['comments', 'likes'])
            ->latest()
            ->paginate(10);

        return Inertia::render('Posts/Index', [
            'posts' => $posts,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $post = $request->user()->posts()->create($validated);

        return redirect()->route('posts.show', $post);
    }

    public function show(Post $post)
    {
        return Inertia::render('Posts/Show', [
            'post' => $post->load(['user', 'comments.user'])
                ->loadCount(['comments', 'likes'])
                ->setAttribute('is_liked', $post->isLikedBy(auth()->user()))
        ]);
    }

    public function create()
    {
        return Inertia::render('Posts/Create', [
            'auth' => ['user' => auth()->user()]
        ]);
    }

    public function storeComment(Request $request, Post $post)
    {
        $validated = $request->validate([
            'content' => 'required|string|min:1|max:1000',
        ], [
            'content.required' => 'Cannot post blank comment',
            'content.min' => 'Cannot post blank comment',
        ]);

        $comment = $post->comments()->create([
            'content' => $validated['content'],
            'user_id' => auth()->id(),
        ]);

        event(new PostCommented($post, auth()->user(), $comment));

        return back();
    }

    public function toggleLike(Post $post)
    {
        $like = $post->likes()->where('user_id', auth()->id())->first();

        if ($like) {
            $like->delete();
        } else {
            $post->likes()->create([
                'user_id' => auth()->id(),
            ]);
            // Fire the event
            event(new PostLiked($post, auth()->user()));
        }

        return back();
    }
}
