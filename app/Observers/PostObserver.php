<?php

namespace App\Observers;

use App\Models\post;
use Illuminate\Support\Facades\Log;

class PostObserver
{
    /**
     * Handle the post "created" event.
     *
     * @param post $post
     * @return void
     */
    public function created(post $post)
    {
        //
    }

    /**
     * Handle the post "updated" event.
     *
     * @param  post  $post
     * @return void
     */
    public function updated(post $post)
    {
        //
    }

    /**
     * generate excerpt before save
     * @param post $post
     */
    public function saving(post $post){

        $post->excerpt = make_excerpt($post->body);
    }

    /**
     * after save
     * @param post $post
     */
    public function saved(post $post){

    }

    /**
     * Handle the post "deleted" event.
     *
     * @param  post  $post
     * @return void
     */
    public function deleted(post $post)
    {
        //
    }

    /**
     * Handle the post "restored" event.
     *
     * @param  post  $post
     * @return void
     */
    public function restored(post $post)
    {
        //
    }

    /**
     * Handle the post "force deleted" event.
     *
     * @param post  $post
     * @return void
     */
    public function forceDeleted(post $post)
    {
        //
    }
}
