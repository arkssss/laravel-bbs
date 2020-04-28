import {
  GET_POST_DETAIL_ACTION,
  CLEAR_POST_DETAIL_ACTION,
}from './actionType'
import axios from 'axios'
import {fromJS} from "immutable";



export const getPostDetail = (id) =>{

  const requestUrl = '/posts/' + id;

  return(dispatch)=>{

    axios.get(requestUrl).then((res)=>{
      console.log(res.data.data);
      const action = {
        'type' : GET_POST_DETAIL_ACTION,
        'value': fromJS(res.data.data),
      };
      dispatch(action);

    }).catch(()=>{
        console.log('error in getPostDetail');
    })

  }

};

export const clearPostDetail = () => {
  return {
    'type' : CLEAR_POST_DETAIL_ACTION,
    'value' : fromJS({
      'body' : '',
      'user' : {
        'name' : '',
      }
    })
  }

};
