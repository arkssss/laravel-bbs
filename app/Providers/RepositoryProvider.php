<?php

namespace App\Providers;

use App\Repository\ImplMysql\ImplPostCategoryRepository;
use App\Repository\ImplMysql\ImplPostRepository;
use App\Repository\IPostCategoryRepository;
use App\Repository\IPostRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        // bind repo
        $this->app->bind(IPostRepository::class, ImplPostRepository::class);
        $this->app->bind(IPostCategoryRepository::class, ImplPostCategoryRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
