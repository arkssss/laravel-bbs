import React, {Component} from "react";
import { Menu } from 'antd';
import {
  MyHeader,
  Logo,
  MyNav,
  Operation,
} from "./style";

const { SubMenu } = Menu;

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 'topic',
    };

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <MyHeader>
        <Logo>
          Ark 论坛
        </Logo>
        <MyNav>
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="topic">
            话题
          </Menu.Item>
          <Menu.Item key="share">
            分享
          </Menu.Item>
          <Menu.Item key="class">
            教程
          </Menu.Item>
          <Menu.Item key="announcement">
            公告
          </Menu.Item>
          <Menu.Item key="qa">
            问答
          </Menu.Item>
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

}

export default Header
