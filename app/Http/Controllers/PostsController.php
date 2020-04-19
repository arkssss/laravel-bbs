<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Service\PostService;

class PostsController extends Controller
{

    /* Post service */
    private $postService;

    // DI
    public function __construct(PostService $postService)
    {
        $this->postService = $postService;
    }

    /* 返回所有的 posts */
    public function index(){

        return json_encode($this->postService->getHomePosts());

    }

}
