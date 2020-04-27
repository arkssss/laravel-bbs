import {fromJS} from "immutable";
import {
  GET_INIT_POST_CATEGORY_ACTION,
  QUILL_VALUE_CHANGE_ACTION,
  POST_CATEGORY_SELECTED,
  POST_TITLE_INPUT_CHANGE,
}from './actionType'


const defaultStatus = fromJS({

  'post_category' : [],
  'quill_value' : '写你所想!',
  'selected_category_id': '',
  'title_value' : '',

});


const writePostReducer = (state = defaultStatus, action) => {
    switch (action.type) {
      case GET_INIT_POST_CATEGORY_ACTION:
        return state.set('post_category', action.value);
      case QUILL_VALUE_CHANGE_ACTION:
        return state.set('quill_value', action.value);
      case POST_TITLE_INPUT_CHANGE:
        return state.set('title_value', action.value);
      case POST_CATEGORY_SELECTED:
        return state.set('selected_category_id', action.value);
      default:
        return state;
    }
};

export default writePostReducer;
