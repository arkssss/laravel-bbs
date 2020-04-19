<?php
namespace App\Service;
use App\Models\Post;
use App\Models\PostCategory;


/* 关于Post的业务层 */
class PostService {


    /* 对应的 Model */
    private $postModel;

    private $postCategory;


    /* DI */
    public function  __construct(Post $post, PostCategory $postCategory)
    {
        $this->postModel = $post;
        $this->postCategory = $postCategory;
    }


    /* 获得所有 Post */
    public function getHomePosts(){

        /* get posts */
        $posts = $this->postModel::with('category', 'user')->paginate(30)->toArray();

        /* value passed for the ajax */
        $passKey = [
            'created_at', 'reply_count', 'title',
            'view_count', 'updated_at'
        ];
        $categoryKey = [
            'name' => 'cat_name',
            'description' => 'cat_des',
        ];
        $userKey = [
            'avatar' => 'user_avatar',
            'name' => 'user_name',
        ];

        /* remove useless item for faster ajax */
        foreach ($posts['data'] as &$post){
            foreach ($post as $item_key => $item_content){
                if ($item_key == 'category'){
                    foreach ($categoryKey as $key => $value){
                        $post[$value] = $post['category'][$key];
                    }
                }else if ($item_key == 'user'){
                    foreach ($userKey as $key => $value){
                        $post[$value] = $post['user'][$key];
                    }
                }else if (in_array($item_key, $passKey)){
                    continue;
                }
                unset($post[$item_key]);
            }
        }

        /* return */
        return $posts;
    }

}












