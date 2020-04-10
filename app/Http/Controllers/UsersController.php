<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserUpdateRequest;
use App\Models\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    //
    public function __construct()
    {
    }

    /**
     * 显示
     * Route::get('/users/{user}', 'UsersController@show')->name('users.show');
     */
    public function show(User $user){

        return view('users.show', compact('user'));
    }


    /**
     * 更新
     */
    public function edit(User $user){

        return view('users.edit', compact('user'));

    }


    public function update(UserUpdateRequest $request, User $user){


        // 更新
        $user->update($request->all());

        // 重定向
        return redirect()->route('users.show', $user->id)->with('success', '个人资料更新成功');
    }
}
