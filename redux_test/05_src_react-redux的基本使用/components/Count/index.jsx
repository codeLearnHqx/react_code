import React, { Component } from "react"

export default class Count extends Component {
  // 初始化状态
  state = { count: 0 }

  // 加
  increment = () => {
    const { value } = this.selectNumber
    this.props.jia(parseInt(value))

  }
  // 减
  decrement = () => {
    const { value } = this.selectNumber
    this.props.jian(parseInt(value))

  }
  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.jia(parseInt(value))
    }


  }
  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.jiaAsync(parseInt(value), 500)
  }


  render() {
    console.log('UI组件接收到的props是：', this.props)
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
    )
  }
}
