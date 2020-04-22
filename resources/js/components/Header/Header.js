import React, {Component} from "react";
import { Menu } from 'antd';
import {connect} from 'react-redux'
import {
  MyHeader,
  Logo,
  MyNav,
  Operation,
} from "./style";
import {actionCreator} from './store';
const { SubMenu } = Menu;

class Header extends Component {

  // handleClick(e) {
  //   console.log('click ', e);
  //   this.setState({
  //     current: e.key,
  //   });
  // };

  getMenuItem(){
    // console.log(this.props.list);
    // console.log(typeof(this.props.list));
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
      <MyHeader>
        <Logo>
          Ark 论坛
        </Logo>
        <MyNav>
          <Menu onClick={this.props.handleHeaderItemClick} selectedKeys={[this.props.current]} mode="horizontal">
          <Menu.Item key="topic">
            话题
          </Menu.Item>
          {this.getMenuItem()}
          {/*<Menu.Item key="share">*/}
          {/*  分享*/}
          {/*</Menu.Item>*/}
          {/*<Menu.Item key="class">*/}
          {/*  教程*/}
          {/*</Menu.Item>*/}
          {/*<Menu.Item key="announcement">*/}
          {/*  公告*/}
          {/*</Menu.Item>*/}
          {/*<Menu.Item key="qa">*/}
          {/*  问答*/}
          {/*</Menu.Item>*/}
          {/*<Menu.Item key="app" disabled>*/}
          {/*  <AppstoreOutlined />*/}
          {/*  Navigation Two*/}
          {/*</Menu.Item>*/}
          {/*<SubMenu*/}
          {/*  title={*/}
          {/*    <>*/}
          {/*      <SettingOutlined />*/}
          {/*      Navigation Three - Submenu*/}
          {/*    </>*/}
          {/*  }*/}
          {/*>*/}
          {/*  <Menu.ItemGroup title="Item 1">*/}
          {/*    <Menu.Item key="setting:1">Option 1</Menu.Item>*/}
          {/*    <Menu.Item key="setting:2">Option 2</Menu.Item>*/}
          {/*  </Menu.ItemGroup>*/}
          {/*  <Menu.ItemGroup title="Item 2">*/}
          {/*    <Menu.Item key="setting:3">Option 3</Menu.Item>*/}
          {/*    <Menu.Item key="setting:4">Option 4</Menu.Item>*/}
          {/*  </Menu.ItemGroup>*/}
          {/*</SubMenu>*/}
          {/*<Menu.Item key="alipay">*/}
          {/*  <a href="https://ant.design" target="_blank" rel="noopener noreferrer">*/}
          {/*    Navigation Four - Link*/}
          {/*  </a>*/}
          {/*</Menu.Item>*/}
        </Menu>
        </MyNav>
      </MyHeader>
    );
  }


  componentDidMount() {
    this.props.getInitPostCategory();
  }

}

const mapStateToProps = (state)=>{

  return {
    'current' : state.header.current,
    'list' : state.header.list,
  }

};

const mapDispatchToProps = (dispatch)=>{

  return {
    handleHeaderItemClick(e){
      console.log('click ', e);
    },
    getInitPostCategory(){
      const action = actionCreator.getInitPostCategory();
      dispatch(action);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
