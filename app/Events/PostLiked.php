<?php

namespace App\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class PostLiked
{
    use Dispatchable, SerializesModels;

    public $post;
    public $user;

    public function __construct($post, $user)
    {
        $this->post = $post;
        $this->user = $user;
    }
} 