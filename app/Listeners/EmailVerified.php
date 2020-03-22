<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Verified;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

/**
 *  监听 Illuminate\Auth\Events\Verified 事件， 在邮箱验证的里面会被触发。
 *
 * Class EmailVerified
 * @package App\Listeners
 */
class EmailVerified
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  Verified  $event
     * @return void
     */
    public function handle(Verified $event)
    {
        //
        session()->flash('success', '邮箱验证成功 ^_^');
    }
}
