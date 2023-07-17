import React, { Component } from "react"
// 引入store，用于获取redux中保存的状态
import store from "../../redux/store"

export default class Count extends Component {
  // 初始化状态
  state = { count: 0 }

  // 加
  increment = () => {
    const { value } = this.selectNumber
    // 通知redux加value
    store.dispatch({ type: "increment", data: parseInt(value)})
  }
  // 减
  decrement = () => {
    const { value } = this.selectNumber
    store.dispatch({ type: "decrement", data: parseInt(value)})

  }
  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    const count = store.getState()
    if (count % 2 !== 0) {
      store.dispatch({ type: "increment", data: parseInt(value)})
    }
  }
  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    setTimeout(() => {
      store.dispatch({ type: "increment", data: parseInt(value)})
    }, 500)

  }

  // // 检测redux中状态的变化，只要变化，就调用render
  // componentDidMount() {
  //   // store中保存的状态发生改变时，就会调用回调函数
  //   store.subscribe(() => {
  //     // 更新页面
  //     this.setState({})
  //   })
  // }

  render() {
    const count = store.getState()
    return (
      <div>
        <h1>当前求和为： {count}</h1>
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
