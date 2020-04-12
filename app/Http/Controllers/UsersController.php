<?php

namespace App\Http\Controllers;

use App\Handlers\ImageUploadHandler;
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


    public function update(UserUpdateRequest $request, ImageUploadHandler $imageUploadHandler, User $user){
        $data = $request->all();

        if($request->avatar){

            $save_path = $imageUploadHandler->save($request->avatar, 'avatar', $user->id, 416);
            if($save_path){
                $data['avatar'] = $save_path['path'];
            }
        }

        // 更新
        $user->update($data);

        // 重定向
        return redirect()->route('users.show', $user->id)->with('success', '个人资料更新成功');
    }
}
