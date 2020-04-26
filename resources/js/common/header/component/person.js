import React, {Component} from "react";
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import {
  Operation
} from "../style";
import {actionCreator} from "../store";

class Person extends Component{

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  LoggedOperation(person_dropdown_visible){
    /* 登陆的操作栏 */
    const menu = (
      <Menu onClick={this.props.handleMenuClick.bind(this)}>
        <Menu.Item key="1">我发布的</Menu.Item>
        <Menu.Item key="2">个人中心</Menu.Item>
        <Menu.Item key="3">退出</Menu.Item>
      </Menu>
    );
    return (
      <Dropdown
        overlay={menu}
        onVisibleChange={this.props.handleVisibleChange}
        visible={person_dropdown_visible}
      >
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Hover me <DownOutlined />
        </a>
      </Dropdown>
    )
  }

  VisitorOperation(){
    /* 游客操作栏 */
    return (
      <div>
        <Link to={'/login'}>
          <Button>登陆</Button>
        </Link>
        <Link to={'/register'}>
          <Button type='primary'>注册</Button>
        </Link>
      </div>
    )
  }

  render() {
    const { person_logged, person_dropdown_visible } = this.props;
    return (
      <Operation>
        {person_logged ? this.LoggedOperation(person_dropdown_visible) :  this.VisitorOperation()}
      </Operation>
    );
  }


}

const mapStateToProps = (state)=>{

  return {
    /* for person component */
    'person_logged' : state.get('header').get('person_logged'),
    'person_dropdown_visible' : state.get('header').get('person_dropdown_visible')
  }

};

const mapDispatchToProps = (dispatch)=>{

  return {
    handleMenuClick(e){
      const action = actionCreator.handlePersonMenuClick(e);
      dispatch(action)
    },
    handleVisibleChange(){
      const action = actionCreator.handlePersonVisibleChange();
      dispatch(action)
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Person);
