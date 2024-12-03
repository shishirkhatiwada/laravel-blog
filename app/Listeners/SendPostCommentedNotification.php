<?php

namespace App\Listeners;

use App\Events\PostCommented;
use App\Mail\PostCommentedMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendPostCommentedNotification implements ShouldQueue
{
    public function handle(PostCommented $event)
    {
        Mail::to($event->post->user->email)
            ->send(new PostCommentedMail($event->post, $event->user, $event->comment));
    }
} 