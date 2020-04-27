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

class Login extends Component {

  render() {
    const handlerOnFinish = this.props.handlerOnFinish.bind(this);
    const handlerOnFinishFailed = this.props.handlerOnFinishFailed.bind(this);

    return (
      <LoginWrapper>
        <FromWrapper>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={(values) => handlerOnFinish(values)}
            onFinishFailed={(errorInfo) => handlerOnFinishFailed(errorInfo)}
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
        </FromWrapper>
      </LoginWrapper>
    )
  }

}

const mapStateToProps = (state)=>{
  return {

  };
};

const mapDispatchToProps = (dispatch) =>{
  return {
    handlerOnFinish(values){
      axios.post('/login', {
        '_token' : $('meta[name="csrf-token"]').attr('content'),
        'email' : values.email,
        'password' : values.password,
        'remember' : values.remember,
      }).then((res)=>{
        /* 重定向到首页 */
        this.props.history.push('/');
      }).catch(()=>{
        console.log('error');
      });
    },

    handlerOnFinishFailed(errorInfo){
      console.log('Failed:', errorInfo);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
