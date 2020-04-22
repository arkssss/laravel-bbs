/* 引入 thunk 部分在 stroe 的创建文件中，即 store/index.js */

// 公共存储仓库, 全局唯一
/* applyMiddleware 可以使用中间件(redux-thunk) */
import {createStore, applyMiddleware} from  'redux'
import reducer from './reducer'
/* 使用 redux-thunk 中间件进行AJAX */
import thunk from 'redux-thunk'

const store = createStore(
  reducer,
  /* redux 中间件定义 */
  applyMiddleware(thunk)
);

export default store;
