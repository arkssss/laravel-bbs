import {
  INIT_HEADER_POST_CATEGORY
}from './actionType'
import axios from "axios";


export const getInitPostCategory = ()=>{

  return(dispatch) => {
    axios.get('/posts/postCategory/all').then((res)=>{
      console.log(res.data);
      const action = {
        'type' : INIT_HEADER_POST_CATEGORY,
        'list': res.data
      };
      dispatch(action)
    }).catch(() =>{
      console.log('error');
    })
  }

};
