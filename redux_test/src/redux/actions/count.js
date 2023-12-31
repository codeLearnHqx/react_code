/* 
    该文件专门为Count组件生成action对象
*/
import { INCREMENT, DECREMENT } from "../constant";

// 同步action，就是指action的值为Object类型的一般对象
export const increment = (data) => ({ type: INCREMENT, data }); // 返回的是一个对象
export const decrement = (data) => ({ type: DECREMENT, data }); // 返回的是一个对象
// 异步action，就是指action的值为函数，异步action中一般都会调用同步action，异步action不是必须要用的
export const incrementAsync = (data, time) => {
  return (dispatch) => {
    // store会自动传入dispatch
    setTimeout(() => {
      return dispatch(increment(data));
    }, time);
  };
};
