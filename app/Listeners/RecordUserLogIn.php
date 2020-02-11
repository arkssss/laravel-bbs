<?php

namespace App\Listeners;

use App\Events\LogIned;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;

class RecordUserLogIn
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
     * @param  LogIned  $event
     * @return void
     */
    public function handle(LogIned $event)
    {
        //
        Log::debug("user have login in : ". $event->user->name);
    }
}
