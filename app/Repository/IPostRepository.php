<?php
/* post 数据仓库接口 */

namespace App\Repository;

use App\Models\Post;
use Illuminate\Database\QueryException;

interface IPostRepository{

    /**
     * 根据类别获得推文
     */
    public function getPostsByCategory($category_id, $limit=10);



    /**
     * 获得所有的推文
     * @param int $limit
     * @return mixed
     */
    public function getAllPosts($limit = 10);



    /**
     * @param $order_field
     * @param string $order_method
     * @param int $limit
     * @return mixed
     */
    public function getAllPostsWithOrder($order_field, $order_method = 'ASC', $limit = 10);


    /**
     * @param $order_field
     * @param $category_id
     * @param string $order_method
     * @param int $limit
     * @return mixed
     * @throws QueryException
     */
    public function getPostsByCategoryWithOrder($order_field, $category_id,  $order_method = 'ASC', $limit = 10);



    /**
     * store a post into db
     * @param Post $post
     * @return mixed
     */
    public function storePost(Post $post);
}
