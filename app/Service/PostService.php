<?php
namespace App\Service;
use App\Models\Post;


/* 关于Post的业务层 */
class PostService {


    /* 对应的 Model */
    private $PostModel;


    /* DI */
    public function  __construct(Post $post)
    {
        $this->PostModel = $post;
    }


    /* 获得特定数量的 posts */
    public function getPosts(){

        return "hello world";

    }

}
