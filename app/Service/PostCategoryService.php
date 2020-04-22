<?php

namespace App\Service;


use App\Repository\IPostCategoryRepository;

class PostCategoryService{

    private $postCategoryRepository;

    public function __construct(IPostCategoryRepository $postCategoryRepository)
    {
        $this->postCategoryRepository = $postCategoryRepository;
    }

    public function getAllPostCategory(){

        return $this->postCategoryRepository->getAllPostCategories()->toArray();

    }

}
