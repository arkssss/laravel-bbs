import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import store from './store/index'
import React from "react";
import HomePost from "./components/Post/HomePost/HomePost";
import Header from "./components/Header/Header";
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// require('./components/Header');

if (document.getElementById('Header')) {
  ReactDOM.render(
    <Provider store={store}>
      <Header />
    </Provider>
    ,
    document.getElementById('Header'));
}


if (document.getElementById('HomePosts')) {
  ReactDOM.render(
    <Provider store={store}>
      <HomePost />
    </Provider>
    ,
    document.getElementById('HomePosts'));
}
