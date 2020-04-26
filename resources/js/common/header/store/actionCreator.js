import {
  INIT_HEADER_POST_CATEGORY_ACTION,
  HEADER_MENU_ITEM_CLICK_ACTION,
  PERSON_DROPDOWN_HOVER_ACTION,
  PERSON_DROPDOWN_ITEM_CLICK_ACTION,
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

      console.log(res)

    }).catch(()=>{

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
