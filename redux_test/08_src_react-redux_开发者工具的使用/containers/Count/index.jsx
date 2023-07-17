import React, { Component } from "react";
// 引入action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/actions/count";
// 引入connect用于连接UI组件与redux
import { connect } from "react-redux";

// 不暴露UI组件
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
    return (
      <div>
        <h2>我是Count组件</h2>
        <h4>当前求和为：{this.props.count}, 下方组件总人数为：{this.props.personCount}</h4>
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

// 只需要暴露容器组件
// API简化写法
export default connect(
  // 映射状态
  // redux保存的总状态是什么，那么传递过来的state就是什么
  (state) => (
    { 
      count: state.count, 
      personCount: state.persons.length 
    }
  ),
  {
    // react-redux帮我们自动分发dispatch
    // 映射操作状态的方法
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction,
  }
)(Count);
