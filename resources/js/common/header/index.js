import React, {Component} from "react";
import { Menu } from 'antd';
import {connect} from 'react-redux'
import {
  HeaderWrapper,
  Logo,
  MyNav,
  Operation,
} from "./style";
import {actionCreator} from './store';
import {Link} from "react-router-dom";


class Index extends Component {

  getMenuItem(){
    return(
      this.props.list.map(function (item) {
        return (
          <Menu.Item key={item.id}>
            {item.name}
          </Menu.Item>
          )
      })
    )
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo href='/'>
          Ark 论坛
        </Logo>
        <MyNav>
          <Menu onClick={this.props.handleHeaderItemClick} selectedKeys={[this.props.current]} mode="horizontal">
          <Menu.Item key="topic">
            话题
          </Menu.Item>
          {this.getMenuItem()}
        </Menu>
        </MyNav>
        <Operation>
          <Link to='/login'>登陆 |</Link>
          <Link to='/register'> 注册</Link>
        </Operation>
      </HeaderWrapper>
    );
  }

  componentDidMount() {
    this.props.getInitPostCategory();
  }

}

const mapStateToProps = (state)=>{

  return {
    'current' : state.get('header').get('current'),
    'list' : state.get('header').get('list'),
  }

};

const mapDispatchToProps = (dispatch)=>{

  return {
    handleHeaderItemClick(e){
      const action = actionCreator.handleMenuItemClick(e);
      dispatch(action);
    },
    getInitPostCategory(){
      const action = actionCreator.getInitPostCategory();
      dispatch(action);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
