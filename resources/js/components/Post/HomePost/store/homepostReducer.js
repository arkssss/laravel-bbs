import {
  INIT_HOME_POST_LIST_ACTION
} from './actionType'

const defaultState = {
  'list' : [
    {
      cat_des: "开发技巧、推荐扩展包等",
      cat_name: "教程",
      created_at: "2017-05-20 10:15:17",
      reply_count: 0,
      title: "Iure error sed ut porro officiis nostrum molestias.",
      updated_at: "2019-11-11 12:41:27",
      user_avatar: null,
      user_name: "Ms. Kiera Toy I",
      view_count: 0
    }
  ]
};

const homepostReducer = (state=defaultState, action) => {

  if (action.type === INIT_HOME_POST_LIST_ACTION){
    return {
      'list' : action.value
    }
  }

  return state
};

export default homepostReducer




