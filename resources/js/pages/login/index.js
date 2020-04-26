import React, {Component} from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import {
  LoginWrapper,
  FromWrapper,
}from './style'
import axios from 'axios'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const getForm = () => {

  return (

    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password/>
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

  )

};

class Login extends Component {

  render() {
    return (
      <LoginWrapper>
        <FromWrapper>
        { getForm() }
        </FromWrapper>
      </LoginWrapper>
    )
  }


  componentDidMount() {

    // console.log($('meta[name="csrf-token"]').attr('content'));

  }
}


const mapStateToProps = (state)=>{
  console.log('---- login ----');
  console.log(state);
  return {

  };
};

const mapDispatchToProps = (dispatch) =>{
  return {

  }
};

const onFinish = (values) => {
  console.log(values);
  axios.post('/login', {
    '_token' : $('meta[name="csrf-token"]').attr('content'),
    'email' : values.email,
    'password' : values.password,
    'remember' : values.remember,
  }).then((res)=>{
    console.log(res);
  }).catch(()=>{
    console.log('error');
  });
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


export default connect(mapStateToProps, mapDispatchToProps)(Login)
