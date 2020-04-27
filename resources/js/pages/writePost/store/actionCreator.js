import axios from 'axios';
import {
  GET_INIT_POST_CATEGORY_ACTION,
  QUILL_VALUE_CHANGE_ACTION,
  POST_TITLE_INPUT_CHANGE,
  POST_CATEGORY_SELECTED,
  FORM_SUBMIT_ACTION,
}from './actionType'
import {fromJS} from "immutable";


export const getInitPostCategory = ()=>{

  return (dispatch) => {
    axios.get('posts/postCategory/all').then((res)=>{
      const action = {
        'type' : GET_INIT_POST_CATEGORY_ACTION,
        'value': fromJS(res.data.data),
      };
      dispatch(action)
    }).catch(()=>{
      console.log('error in ajax posts/postCategory/all');
    })

  }
};


export const changeQuilValue = (value) => {
    return {
      'type' : QUILL_VALUE_CHANGE_ACTION,
      'value': value,
    };
};

export const postTitleInputChange = (value)=>{

  return {
    'type' : POST_TITLE_INPUT_CHANGE,
    'value': value,
  }

};

export const postCategorySelected = (value)=>{
    return{
      'type' : POST_CATEGORY_SELECTED,
      'value': value,
    }
};


/* 表单数据提交 */
export const postFormData = (formData) => {
    axios.post('/posts', formData).then((res)=>{
      console.log(res);
      this.props.history.push('/')
    }).catch(()=>{
      console.log('error')
      this.props.history.push('/')
    })
};
