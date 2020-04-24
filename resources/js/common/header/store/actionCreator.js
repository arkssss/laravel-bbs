import {
  INIT_HEADER_POST_CATEGORY_ACTION,
  HEADER_MENU_ITEM_CLICK_ACTION,
}from './actionType'
import axios from "axios";


export const getInitPostCategory = ()=>{

  return(dispatch) => {
    axios.get('/posts/postCategory/all').then((res)=>{
      console.log(res.data);
      const action = {
        'type' : INIT_HEADER_POST_CATEGORY_ACTION,
        'list': res.data
      };
      dispatch(action)
    }).catch(() =>{
      console.log('error');
    })
  }

};


export const handleMenuItemClick = (e)=>{

  console.log(e);
  return {
      'type' : HEADER_MENU_ITEM_CLICK_ACTION,
      'current' : e.key,
  };

};
