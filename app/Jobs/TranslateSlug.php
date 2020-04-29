<?php

namespace App\Jobs;

use App\Handlers\SlugTranslateHandler;
use App\Models\Post;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class TranslateSlug implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;


    private $post;

    /**
     * Create a new job instance.
     *
     * @param Post $post
     */
    public function __construct(Post $post)
    {
        //
        $this->post = $post;
    }

    /**
     * Execute the job.
     *
     * @param SlugTranslateHandler $slugTranslateHandler
     * @return void
     */
    public function handle(SlugTranslateHandler $slugTranslateHandler)
    {

        Log::debug("in Job Queue Handle");

        $title = $this->post->title;

        //
        $slug = $slugTranslateHandler->translate($title);

        //
        DB::table('posts')->where('id',$this->post->id)->update([
            'slug' => $slug
        ]);
    }
}
