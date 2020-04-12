<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * 用户更新时候的策略
     * @param User $currentUser 当前登陆的用户
     * @param User $passUser    传递过来的用户
     * @return bool
     */
    public function edit(User $currentUser, User $passUser){

        return $currentUser->id == $passUser->id;

    }

    public function update(User $currentUser, User $passUser){

        return $currentUser->id == $passUser->id;

    }
}
