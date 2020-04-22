<?php
/* post 数据仓库接口 */

namespace App\Repository;

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

}
