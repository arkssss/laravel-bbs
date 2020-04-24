import React, {Component} from 'react'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
}from './style'
import PostList from './components/postList'
import Recommend from "./components/recommend";
import homeBanner from '../../../../public/static/homepages/banner.jpg'

/* 首页 Post 显示 */
class HomePages extends Component{

    render(){
        return (
          <HomeWrapper>
            <HomeLeft>
              <img className='homeBanner' src={homeBanner} />
              <PostList />
            </HomeLeft>
            <HomeRight>
              <Recommend />
            </HomeRight>
          </HomeWrapper>
        );
    }
}

export default HomePages
