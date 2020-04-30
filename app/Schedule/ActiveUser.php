<?php

namespace App\Schedule;

use App\Models\Post;
use App\Repository\ImplMysql\ImplPostRepository;
use App\Repository\IPostRepository;
use Illuminate\Support\Facades\Cache;

/**
 * 利用 cache 存取当前的活跃用户
 * Class ActiveUser
 */
class ActiveUser {

    /* active config */
    protected $requireActiveUsersNumber = 8;
    protected $activeDayGap = 1000;

    /* cache config */
    // key & 过期时间 (65分钟)
    protected $cache_key = 'laravel_active_users';
    protected $cache_expire_time = 60 * 65 ;


    protected $postRepo;

    public function __construct()
    {
        $post = new Post();
        $this->postRepo = new ImplPostRepository($post);

    }


    public function getActiveUser(){

        return Cache::remember($this->cache_key, $this->cache_expire_time, function (){
            return $this->calculateActiveUser();
        });

    }


    protected function calculateActiveUser(){


        /* */
        $rawActiveUserArrays = $this->postRepo->getPostTimesWithUserId($this->requireActiveUsersNumber, $this->activeDayGap);

        $activeUserIds = [];

        foreach ($rawActiveUserArrays as $eachUser){
            array_push($activeUserIds, $eachUser->u_id);
        }

        return $activeUserIds;
    }


}
