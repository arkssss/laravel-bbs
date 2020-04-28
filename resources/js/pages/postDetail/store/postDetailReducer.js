import {fromJS} from "immutable";
import {
  GET_POST_DETAIL_ACTION,
  CLEAR_POST_DETAIL_ACTION,
}from './actionType'

const defaultState = fromJS({
  'post' : {
    'body' : '',
    'user' : {
      'name' : '',
    }
  }
});

const postDetailReducer = (state = defaultState, action) => {

  switch (action.type) {
    case GET_POST_DETAIL_ACTION:
      return state.set('post', action.value);
    case CLEAR_POST_DETAIL_ACTION:
      return state.set('post', action.value);
    default :
      return state;
  }

};

export default postDetailReducer;
