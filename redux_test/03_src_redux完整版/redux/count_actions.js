/* 
    该文件专门为Count组件生成action对象
*/
import { INCREMENT, DECREMENT } from './constant'

export const createIncrementAction = (data) =>  ({ type: INCREMENT, data }) // 返回的是一个对象
export const createDecrementAction = (data) =>  ({ type: DECREMENT, data }) // 返回的是一个对象
