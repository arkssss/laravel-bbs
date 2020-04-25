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
            'value': fromJS(res.data.data.data),
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
        'value': fromJS(res.data.data),
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
        'list': fromJS(res.data.data.data),
        'current_category' : category_id,
      };
      dispatch(action);
    }).catch(()=>{
      console.log('error');
    })
  }
};

/* button_key => order */
export const buttonStatusChange = (button_key, current_category) =>{
  return (dispatch) => {

    const url = current_category
                ? '/posts/order/' + button_key + '/category/' + current_category
                : '/posts/order/' + button_key;

    axios.get(url).then((res)=>{
      const action = {
        'type' : HOME_POST_BUTTON_STATUS_CHANGE,
        'buttonStatus' : button_key,
        'list' : fromJS(res.data.data.data),
      };
      dispatch(action)
    }).catch(()=>{
      console.log('error');
    });
  }
};
