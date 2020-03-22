<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \Illuminate\Support\Facades\URL;

class PagesController extends Controller
{
    //
    public function __construct(){
//        $this->middleware("throttle:1,1");

    }

    public function root(){

        /* 首页 */
        return view('pages.root');
    }
}
