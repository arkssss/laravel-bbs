<?php

namespace App\Providers;

use App\Models\Post;
use App\Observers\PostObserver;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
        if (app()->environment() == 'local' || app()->environment() == 'testing') {

            $this->app->register(\Summerblue\Generator\GeneratorsServiceProvider::class);

        }

        /* baidu translate service */
        $this->app->when('App\Handlers\SlugTranslateHandler')
            ->needs('$appId')
            ->give(Config::get('services.BaiDu_translate.appId')?:'');

        $this->app->when('App\Handlers\SlugTranslateHandler')
            ->needs('$appKey')
            ->give(Config::get('services.BaiDu_translate.appKey')?:'');

    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // post 观察者
        Post::observe(PostObserver::class);
    }
}
