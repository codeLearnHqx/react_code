/* 
    该文件专门用于暴露一个store对象, 整个应用只有一个store对象
*/
// 引入configureStore, 用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from "redux";
// 引入redux-thunk，用于支持异步action
import thunk from "redux-thunk";
// 引入redux-devtools-extension(用于支持redux开发者工具)
import { composeWithDevTools } from "redux-devtools-extension";
// 引入汇总之后的reducer
import allReducer from "./reducers";


// 暴露store
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)));
