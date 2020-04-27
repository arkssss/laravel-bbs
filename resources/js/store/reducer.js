/* /store/reducer.js */
import {combineReducers} from 'redux-immutable'
import {homepostReducer} from '../pages/home/store'
import {headerReducer} from '../common/header/store'
import {writePostReducer} from '../pages/writePost/store'

/* 合并各个 reducer */
export default combineReducers({

  /* 该reducer key值为header */
  homepost : homepostReducer,
  header : headerReducer,
  writePost : writePostReducer,

})
