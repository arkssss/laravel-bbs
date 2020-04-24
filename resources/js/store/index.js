// 公共存储仓库, 全局唯一
/* applyMiddleware 可以使用中间件(redux-thunk) */
import {createStore, applyMiddleware, compose} from  'redux'
import reducer from './reducer'
/* 使用 redux-thunk 中间件进行AJAX */
import thunk from 'redux-thunk'

/*
    这种写法让 redux 同时支持
    redux-devtools,
    thunk
    两个中间件
*/
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

/* redux 中间件定义 */
const enhancer = composeEnhancer(
  applyMiddleware(thunk)
);

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
  reducer,
  enhancer
);

export default store;
