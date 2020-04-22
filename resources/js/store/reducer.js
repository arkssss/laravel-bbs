/* /store/reducer.js */
import {combineReducers} from 'redux'
import {homepostReducer} from '../components/Post/HomePost/store'
import {headerReducer} from '../components/Header/store'

/* 合并各个 reducer */
export default combineReducers({

  /* 该reducer key值为header */
  homepost : homepostReducer,
  header : headerReducer,

})
