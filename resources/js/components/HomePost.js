import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import {Button} from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

/* 首页 Post 显示 */
export default class HomePost extends Component{

    render(){
      return (
        <div>
          <Button>1</Button>
        </div>
      )
    }

}


if (document.getElementById('HomePosts')) {
    ReactDOM.render(<HomePost />, document.getElementById('HomePosts'));
  }
