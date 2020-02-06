<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    //

    public function root(){

        /* 首页 */
        return view('pages.root');
    }
}
