<?php
namespace App\Service;
use App\Models\Post;
use App\Models\PostCategory;
use App\Repository\IPostRepository;


/* 关于Post的业务层 */
class PostService {


    /* post 数据仓库 */
    private $postRepository;

    /* DI */
    public function  __construct(IPostRepository $postRepository)
    {
        $this->postRepository = $postRepository;
    }


    /**
     * 格式化 posts
     * 删除无用信息，增加传递效率
     * @param $posts : array
     * @return mixed $posts : array
     */
    private function formatPosts($posts){

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
        return $posts;
    }


    /* 获得所有 Post */
    public function getPaginate(){
        $pageNumber = 10;

        /* get posts */
        $posts = $this->postRepository->getAllPosts($pageNumber)->toArray();

        /* return */
        return $this->formatPosts($posts);
    }


    /**
     * 根据类别获取相应的 posts
     * @param $category_id
     * @param int $pageNumber
     * @return
     */
    public function getPostsByCategory($category_id){

        $pageNumber = 10;

        $posts = $this->postRepository->getPostsByCategory($category_id, $pageNumber);
        $posts = $posts->toArray();

        return $this->formatPosts($posts);
    }
}












