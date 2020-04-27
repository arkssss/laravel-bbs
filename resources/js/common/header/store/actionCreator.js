import {
  INIT_HEADER_POST_CATEGORY_ACTION,
  HEADER_MENU_ITEM_CLICK_ACTION,
  PERSON_DROPDOWN_HOVER_ACTION,
  PERSON_DROPDOWN_ITEM_CLICK_ACTION,
  PERSON_HAS_LOGGED_IN,
}from './actionType'
import axios from "axios";


export const getInitPostCategory = ()=>{

  return(dispatch) => {
    axios.get('/posts/postCategory/all').then((res)=>{
      const action = {
        'type' : INIT_HEADER_POST_CATEGORY_ACTION,
        'list': res.data.data
      };
      dispatch(action)
    }).catch(() =>{
      console.log('error');
    })
  }

};

/* 获取已登陆用户的信息 */
export const getLoggedPersonInformation = () =>{

  return (dispatch) => {

    axios.post('/auth').then((res)=>{

      if(res.data.logged){
        /* 已登陆 */
        const action = {
          'type' : PERSON_HAS_LOGGED_IN,
          'person_information' : res.data.person_information
        };
        dispatch(action);
      }

    }).catch((e)=>{
      console.log('error');
    })
  }

};


export const handleMenuItemClick = (e)=>{

  return {
      'type' : HEADER_MENU_ITEM_CLICK_ACTION,
      'current' : e.key,
  };

};


export const handlePersonMenuClick = (e)=>{
  console.log(e.key);
  return {
    'type' : PERSON_DROPDOWN_ITEM_CLICK_ACTION,
    'person_dropdown_visible' : false
  }

};


export const handlePersonVisibleChange = ()=>{
  return {
    'type' : PERSON_DROPDOWN_HOVER_ACTION,
    'person_dropdown_visible' : true,
  }
};
