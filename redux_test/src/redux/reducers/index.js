/* 
    index.js 用于汇总所有的reducer
*/
// 引入combineReducers，用于汇总多个reducer
import { combineReducers } from "redux";
// 引入为Count组件服务的reducer
import count from "./count";
// 引入为Person组件服务的reducer
import persons from "./person";


// 汇总所有的reducer变为一个总的reducer
// combineReducers传入的对象就是redux保存的总状态对象
// 该对象的key就是store中保存的总状态的key
// 该对象的value就是store中保存的总状态的value
export default combineReducers({ count, persons })