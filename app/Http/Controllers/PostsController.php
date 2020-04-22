<?php

namespace App\Http\Controllers;

use App\Service\PostCategoryService;
use Illuminate\Http\Request;
use App\Service\PostService;

class PostsController extends Controller
{

    /* post service */
    private $postService;

    /* post category service*/
    private $postCategoryService;

    // DI
    public function __construct(PostService $postService, PostCategoryService $postCategoryService)
    {
        $this->postService = $postService;
        $this->postCategoryService = $postCategoryService;
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

    /**
     * @return false|string
     */
    public function getAllPostsCategory(){
        return json_encode($this->postCategoryService->getAllPostCategory());
    }

}
