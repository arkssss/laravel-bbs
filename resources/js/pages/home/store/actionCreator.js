import {
  INIT_HOME_POST_LIST_ACTION,
  INIT_HOME_POST_CATEGORY_ACTION,
  GET_HOME_POST_BY_CATEGORY,
  HOME_POST_BUTTON_STATUS_CHANGE,
} from './actionType'
import axios from 'axios'
import {fromJS} from "immutable";

export const getInitHomepostListCreator = ()=>{
    return(dispatch) => {
      axios.get('/posts').then((res)=>{
          const action = {
            'type' : INIT_HOME_POST_LIST_ACTION,
            'value': fromJS(res.data.data),
          };
          dispatch(action)
      }).catch(() =>{
        console.log('error');
      })
    }
  };

export const getInitPostCategory = ()=>{
  return(dispatch) => {
    axios.get('/posts/postCategory/all').then((res)=>{
      const action = {
        'type' : INIT_HOME_POST_CATEGORY_ACTION,
        'value': fromJS(res.data),
      };
      dispatch(action);
    }).catch(()=>{
      console.log('error');
    })
  }
};

export const getPostsByCategory = (category_id) => {
    return(dispatch) => {
    axios.get('/posts/category/' + category_id).then((res)=>{
      const action = {
        'type' : GET_HOME_POST_BY_CATEGORY,
        'list': fromJS(res.data.data),
      };
      dispatch(action);
    }).catch(()=>{
      console.log('error');
    })
  }
};

export const buttonStatusChange = (button_key) =>{
  return (dispatch) => {
    const action = {
      'type' : HOME_POST_BUTTON_STATUS_CHANGE,
      'buttonStatus' : button_key
    };
    dispatch(action)
  }
};
