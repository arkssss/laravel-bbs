import {
  INIT_HEADER_POST_CATEGORY_ACTION,
  HEADER_MENU_ITEM_CLICK_ACTION,
} from './actionType'
import {fromJS} from "immutable";

const defaultState = fromJS({
  'current': 'topic',

  'list' : [
    {
      "id": 1,
      "name": "分享",
    },
    {
      "id": 2,
      "name": "公告",
    },
    {
      "id": 3,
      "name": "程序",
    }
  ]
});


const headerReducer = (state = defaultState, action) =>{
    if(action.type === INIT_HEADER_POST_CATEGORY_ACTION){
      return  state.set('list', action.list);
    }

    if(action.type === HEADER_MENU_ITEM_CLICK_ACTION){
      return  state.set('current', action.current);
    }

    return state;
};

export default headerReducer;
