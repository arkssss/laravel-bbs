import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import store from './store/index';
import { Route, BrowserRouter } from 'react-router-dom';
import React from "react";
import HomePages from "./pages/home";
import Header from "./common/header";
import Login from "./pages/login";
import Register from "./pages/register";
import UserHome from "./pages/userHome";
import WritePost from "./pages/writePost";
import PostDetail from "./pages/postDetail";
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
if (document.getElementById('app')) {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div>
          <Route path = '/' exact component = {HomePages}></Route>
          <Route path = '/login' exact component = {Login}></Route>
          <Route path = '/register' exact component = {Register}></Route>
          <Route path = '/userHome' exact component = {UserHome}></Route>
          <Route path = '/write' exact component={WritePost}></Route>
          <Route path = '/postDetail/:id/:slug?' exact component={PostDetail}></Route>
        </div>
      </BrowserRouter>
    </Provider>
    ,
    document.getElementById('app'));
}
