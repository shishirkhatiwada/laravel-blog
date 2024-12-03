<?php

namespace App\Listeners;

use App\Events\PostLiked;
use App\Mail\PostLikedMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendPostLikedNotification implements ShouldQueue
{
    public function handle(PostLiked $event)
    {
        Mail::to($event->post->user->email)
            ->send(new PostLikedMail($event->post, $event->user));
    }
} 