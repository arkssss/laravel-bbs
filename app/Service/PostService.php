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

        $posts = $this->postModel::with('category', 'user')->paginate(10)->toArray();

        /* value pass for the ajax */
        $passKey = [
            'created_at', 'reply_count', 'title',
            'view_count', 'updated_at'
        ];
        $categoryKey = [
            'name',
            'description',
        ];
        $userKey = [
            'avatar',
            'name'
        ];

        /* remove useless item */
        foreach ($posts as &$post){
            foreach ($post as $item_key => $item_content){
                if ($item_key == 'category'){
                    foreach ($categoryKey as $value){
                        $post[$value] = $post['category'][$value];
                    }
                }else if ($item_key == 'user'){
                    foreach ($userKey as $value){
                        $post[$value] = $post['user'][$value];
                    }
                }else if (in_array($item_key, $passKey)){
                    continue;
                }
                unset($post[$item_key]);
            }
        }

        /* transform category_id to */
        return $posts;
    }

}












