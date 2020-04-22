<?php
/* Mysql 的 repo 实现类 */

namespace App\Repository\ImplMysql;

use App\Models\Post;
use App\Repository\IPostRepository;


class ImplPostRepository implements IPostRepository{

    private $postModel;

    /* DI */
    public function __construct(Post $postModel)
    {
        $this->postModel = $postModel;
    }


    /**
     * @param int $limit
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function getAllPosts($limit = 10){

        return $this->postModel
            ->with('category', 'user')
            ->paginate($limit);
    }

    /**
     * @param $category_id
     * @param int $limit
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function getPostsByCategory($category_id, $limit = 10)
    {
        // TODO: Implement getPostsByCategory() method.
        return $this->postModel->with('category', 'user')
            ->where('category_id', $category_id)
            ->paginate($limit);
    }
}
