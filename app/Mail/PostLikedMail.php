<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PostLikedMail extends Mailable
{
    use SerializesModels;

    public $post;
    public $user;

    public function __construct($post, $user)
    {
        $this->post = $post;
        $this->user = $user;
    }

    public function build()
    {
        return $this->markdown('emails.posts.liked')
                    ->subject('Someone liked your post!');
    }
} 