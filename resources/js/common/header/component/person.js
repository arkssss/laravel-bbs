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


  LoggedOperation(person_dropdown_visible, person_information){
    /* 登陆的操作栏 */
    const menu = (
      <Menu onClick={this.props.handleMenuClick.bind(this)}>
        {/*<Link to={''}>*/}
        <Menu.Item>我发布的</Menu.Item>
        {/*</Link>*/}
        <Link to={'/userHome'}>
          <Menu.Item key="2">个人中心</Menu.Item>
        </Link>
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
          {person_information.name} <DownOutlined />
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

  getOperationElement(person_logged, person_dropdown_visible, person_information){
    switch (person_logged) {
      // case '':
      //   return null;
      case false:
        return this.VisitorOperation();
      case true:
        return this.LoggedOperation(person_dropdown_visible, person_information);
    }
  }

  render() {
    const { person_logged, person_dropdown_visible, person_information } = this.props;
    // console.log('person_information');
    // console.log(person_information);
    // console.log(person_logged.name);
    return (
      <Operation>
        { this.getOperationElement( person_logged, person_dropdown_visible, person_information) }
      </Operation>
    );
  }

  componentDidMount() {

    this.props.handleLogDetect();

  }

}

const mapStateToProps = (state)=>{

  return {
    /* for person component */
    'person_logged' : state.get('header').get('person_logged'),
    'person_dropdown_visible' : state.get('header').get('person_dropdown_visible'),
    'person_information' : state.get('header').get('person_information'),
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
    },
    handleLogDetect(){
      const action = actionCreator.getLoggedPersonInformation();
      dispatch(action)
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Person);
