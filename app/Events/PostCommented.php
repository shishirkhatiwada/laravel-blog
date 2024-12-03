<?php

namespace App\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class PostCommented
{
    use Dispatchable, SerializesModels;

    public $post;
    public $user;
    public $comment;

    public function __construct($post, $user, $comment)
    {
        $this->post = $post;
        $this->user = $user;
        $this->comment = $comment;
    }
} 