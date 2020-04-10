<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    //
    public function __construct()
    {
    }

    /**
     * Route::get('/users/{user}', 'UsersController@show')->name('users.show');
     */
    public function show(User $user){

        return view('users.show', compact('user'));
    }
}
