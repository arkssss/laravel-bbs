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

        return json_encode($this->postService->getPaginate(30));

    }


    /**
     * @param Request $request
     * @return false|string
     */
    public function getPostsByCategory(Request $request){

        $category_id = $request->category_id;

        return json_encode($this->postService->getPostsByCategory($category_id));

    }

}
