<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostStoreRequest;
use App\Models\Post;
use App\Service\PostCategoryService;
use Illuminate\Http\Request;
use App\Service\PostService;
use Illuminate\Support\Facades\Log;

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
        $posts = $this->postService->getPaginate();

        return json_encode([
            'status' => config('constant.STATES_SUCCESS'),
            'data'   => $posts
        ]);

    }


    /**
     * 按类别获得文章
     * @param Request $request
     * @return false|string
     */
    public function getPostsByCategory(Request $request){

        $category_id = $request->category_id;
        $posts = $this->postService->getPostsByCategory($category_id);

        return json_encode([
            'status' => config('constant.STATES_SUCCESS'),
            'data' => $posts
        ]);

    }


    /**
     * 获得所有文章
     * @return false|string
     */
    public function getAllPostsCategory(){

        $posts = $this->postCategoryService->getAllPostCategory();

        return json_encode(
            [
                'status' => config('constant.STATUS_SUCCESS'),
                'data' => $posts,
            ]);
    }


    /**
     * 有顺序的展示所有文章
     * @param Request $request
     * @return false|string
     */
    public function getAllPostsByOrder(Request $request){

        $order_field = $request->order;

        $posts = $this->postService->getAllPostsByOrder($order_field);
        return json_encode(
            [
                'statue' => config('constant.STATUS_SUCCESS'),
                'data' => $posts,
            ]);
    }


    /**
     * 通过类名有顺序的显示文章
     * @param Request $request
     * @return false|string
     */
    public function getPostsByCategoryWithOrder(Request $request){
        $order_field = $request->order;
        $category_id = $request->category_id;

        $posts = $this->postService->getPostsByCategoryWithOrder($order_field, $category_id);

        return json_encode(
            [
                'statue' => config('constant.STATUS_SUCCESS'),
                'data' => $posts,
            ]
        );
    }


    /**
     * 创建一个新的文章
     * @param PostStoreRequest $postStoreRequest
     * @return false|string
     */
    public function store(PostStoreRequest $postStoreRequest, Post $post){

        $post->fill($postStoreRequest->all());
        $post['u_id'] = 1;

        /* save success or not */
        $success = $this->postService->storePost($post);

        return json_encode([
            'status'=>$success,
        ]);

    }
}
