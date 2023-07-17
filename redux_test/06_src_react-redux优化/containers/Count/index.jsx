// 引入action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_actions";
// 引入connect用于连接UI组件与redux
import { connect } from "react-redux";
import React, { Component } from "react";

class Count extends Component {
  // 初始化状态
  state = { count: 0 };

  // 加
  increment = () => {
    const { value } = this.selectNumber;
    this.props.jia(parseInt(value));
  };
  // 减
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.jian(parseInt(value));
  };
  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 !== 0) {
      this.props.jia(parseInt(value));
    }
  };
  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.jiaAsync(parseInt(value), 500);
  };

  render() {
    console.log("UI组件接收到的props是：", this.props);
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
        &nbsp;&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}

// 映射状态
// 括号里面的当作一个整体充当一个返回值
// const mapStateToProps = state => ({ count: state }) // react-redux帮我们调用了store.getState()

// 映射操作状态的方法
// const mapDispatchToProps = dispatch => ( // react-redux帮我们调用了store.dispatch()
//     {
//         jia: number => dispatch(createIncrementAction(number)),
//         jian: number => dispatch(createDecrementAction(number)),
//         jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
//     }
// )

// 一般写法
// export default connect(
//   state => ({ count: state }),
//   dispatch => ({
//     jia: number => dispatch(createIncrementAction(number)),
//     jian: number => dispatch(createDecrementAction(number)),
//     jiaAsync: (number, time) =>
//       dispatch(createIncrementAsyncAction(number, time)),
//   })
// )(CountUI);

// 只需要暴露容器组件
// API简化写法
export default connect(
  state => ({ count: state }), {
  // react-redux帮我们自动分发dispatch
  jia: createIncrementAction,
  jian: createDecrementAction,
  jiaAsync: createIncrementAsyncAction,
})(Count);
