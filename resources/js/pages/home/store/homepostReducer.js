import {
  INIT_HOME_POST_LIST_ACTION,
  INIT_HOME_POST_CATEGORY_ACTION,
  GET_HOME_POST_BY_CATEGORY,
  HOME_POST_BUTTON_STATUS_CHANGE,
} from './actionType'
import {fromJS} from "immutable";

/* immutable */
const defaultState = fromJS({
  "buttonStatus" : 'last_replay',

  "list" : [
      {
        "cat_des": "开发技巧、推荐扩展包等",
        "cat_name": "教程",
        "created_at": "2017-05-20 10:15:17",
        "reply_count": 0,
        "title": "Iure error sed ut porro officiis nostrum molestias.",
        "updated_at": "2019-11-11 12:41:27",
        "user_avatar": null,
        "user_name": "Ms. Kiera Toy I",
        "view_count": 0,
      },
  ],

  "listCategory" : []
});

const homepostReducer = (state = defaultState, action) => {

  if (action.type === INIT_HOME_POST_LIST_ACTION){
    return state.set('list', action.value);
  }
  if(action.type === INIT_HOME_POST_CATEGORY_ACTION){
    return state.set('listCategory', action.value);
  }
  if(action.type === GET_HOME_POST_BY_CATEGORY){
    return state.set('list', action.list);
  }
  if(action.type === HOME_POST_BUTTON_STATUS_CHANGE){
    return state.set('buttonStatus', action.buttonStatus);
  }
  return state;
};

export default homepostReducer
