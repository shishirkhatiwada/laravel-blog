<?php

namespace App\Providers;

use App\Events\PostLiked;
use App\Events\PostCommented;
use App\Listeners\SendPostLikedNotification;
use App\Listeners\SendPostCommentedNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        PostLiked::class => [
            SendPostLikedNotification::class,
        ],
        PostCommented::class => [
            SendPostCommentedNotification::class,
        ],
    ];

    public function boot()
    {
        //
    }
}
