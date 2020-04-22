import {
  INIT_HEADER_POST_CATEGORY
} from './actionType'


const defaultState = {
  'current': 'topic',

  'list' : [
    {
      "id": 1,
      "name": "分享",
      "description": "分享创造，分享发现",
      "post_count": 0
    }
  ]
};


const headerReducer = (state = defaultState, action) =>{

    if(action.type === INIT_HEADER_POST_CATEGORY){
      return {
        'current' : state.current,
        'list' : action.list
      }
    }

    return state;

};

export default headerReducer;
