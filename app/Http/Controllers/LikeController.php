<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Notifications\PostLiked;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function toggle(Request $request, Post $post): RedirectResponse
    {
        $like = $post->likes()->where('user_id', $request->user()->id)->first();

        if ($like) {
            $like->delete();
        } else {
            $like = $post->likes()->create([
                'user_id' => $request->user()->id,
            ]);

            // Notify the post author
            if ($post->user->id !== $request->user()->id) {
                $post->user->notify(new PostLiked($like));
            }
        }

        return back();
    }
} 