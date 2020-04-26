import React, {Component} from "react";
import { Menu } from 'antd';
import {connect} from 'react-redux'
import {
  HeaderWrapper,
  Logo,
  MyNav,

} from "./style";
import {actionCreator} from './store';
import Person from "./component/person";
import axios from "axios";

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
    const {handleHeaderItemClick, current } = this.props;
    return (
      <HeaderWrapper>
        <Logo href='/'>
          Ark 论坛
        </Logo>
        <MyNav>
          <Menu onClick={handleHeaderItemClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="topic">
            话题
          </Menu.Item>
          {this.getMenuItem()}
        </Menu>
        </MyNav>
        <Person/>
      </HeaderWrapper>
    );
  }

  componentDidMount() {
    this.props.getInitPostCategory();

    axios.get('/auth').then((res)=>{

      console.log(res)

    }).catch(()=>{

    })
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
