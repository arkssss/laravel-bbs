import {
  INIT_HOME_POST_LIST_ACTION
} from './actionType'
import  axios from 'axios'



export const getInitHomepostListCreator = ()=>{
    return(dispatch) => {
      axios.get('/posts').then((res)=>{
          const action = {
            'type' : INIT_HOME_POST_LIST_ACTION,
            'value': res.data.data
          };
          dispatch(action)
      }).catch(() =>{
        console.log('error');
      })
    }
  };
