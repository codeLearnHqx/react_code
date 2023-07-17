/* 
    该文件专门用于暴露一个store对象, 整个应用只有一个store对象
*/
// 引入configureStore, 用于创建redux中最为核心的store对象
import { createStore, applyMiddleware, combineReducers } from "redux";
// 引入redux-thunk，用于支持异步action
import thunk from "redux-thunk";
// 引入redux-devtools-extension(用于支持redux开发者工具)
import { composeWithDevTools } from "redux-devtools-extension";
// 引入为Count组件服务的reducer
import countReducer from "./reducers/count";
// 引入为Person组件服务的reducer
import personReducer from "./reducers/person";

// 汇总所有的reducer变为一个总的reducer
// combineReducers传入的对象就是redux保存的总状态对象\
// 该对象的key就是store中保存的总状态的key
// 该对象的value就是store中保存的总状态的value
const allReducer = combineReducers({ count: countReducer, persons: personReducer })

// 暴露store
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)));
