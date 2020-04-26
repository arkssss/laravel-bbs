import React, {Component} from "react";
import axios from 'axios'

class Register extends Component{

  render() {

    return (

      <div>hello register</div>

    )

  }


  componentDidMount() {

      // axios.post('/posts',{
      //     'title' : 'hello fz',
      //     'body'  : 'hello fz day, this is a happy day in jzc',
      //     'category_id' : 2
      // }).then((res)=>{
      //   console.log(res.status);
      //   console.log(res.data)
      // }).catch((e)=>{
      //   console.log(e)
      // })
  }

}

export default Register
