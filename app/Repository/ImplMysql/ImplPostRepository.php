<?php
/* Mysql 的 repo 实现类 */

namespace App\Repository\ImplMysql;

use App\Models\Post;
use App\Repository\IPostRepository;
use Illuminate\Database\QueryException;


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
     * @throws QueryException
     */
    public function getAllPosts($limit = 10){

        return $this->postModel
            ->with('category', 'user')
            ->paginate($limit)
            ->toArray();
    }


    /**
     * @param $category_id
     * @param int $limit
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     * @throws QueryException
     */
    public function getPostsByCategory($category_id, $limit = 10)
    {
        // TODO: Implement getPostsByCategory() method.

        return $this->postModel
            ->with('category', 'user')
            ->where('category_id', $category_id)
            ->paginate($limit)
            ->toArray();
    }

    /**
     * @param $order_field
     * @param string $order_method
     * @param int $limit
     * @return mixed
     * @throws QueryException
     */
    public function getAllPostsWithOrder($order_field, $order_method = 'ASC', $limit = 10){

        return $this->postModel
            ->with('category', 'user')
            ->orderBy($order_field, $order_method)
            ->paginate($limit)
            ->toArray();
    }

    /**
     * @param $order_field
     * @param $category_id
     * @param string $order_method
     * @param int $limit
     * @return mixed
     * @throws QueryException
     */
    public function getPostsByCategoryWithOrder($order_field, $category_id,  $order_method = 'ASC', $limit = 10){

        return $this->postModel
            ->with('category', 'user')
            ->where('category_id', $category_id)
            ->orderBy($order_field, $order_method)
            ->paginate($limit)
            ->toArray();
    }


    /**
     * @param Post $post
     * @return mixed|void
     */
    public function storePost(Post $post)
    {

        return $post->save();

    }
}
