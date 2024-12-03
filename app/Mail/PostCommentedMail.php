<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PostCommentedMail extends Mailable
{
    use SerializesModels;

    public $post;
    public $user;
    public $comment;

    public function __construct($post, $user, $comment)
    {
        $this->post = $post;
        $this->user = $user;
        $this->comment = $comment;
    }

    public function build()
    {
        return $this->markdown('emails.posts.commented')
                    ->subject('New comment on your post!');
    }
} 