import React, { Component } from 'react'

export default class Demo extends Component {

  state = {count: 0}  

  increment = () => {
/*  
    // 1、对象式的setState
    // 1. 获取原来的count值
    const {count} = this.state
    // 2. 更新状态  // setState()引起的状态更新是异步的
    this.setState({ count: count + 1 }, () => { // 回调函数，在状态更新且界面更新（render调用后）后执行
            console.log('@@@', this.state.count)
        }
    )  
*/
    
    // 2、函数式的setState（也有回调函数）
    // 函数式的函数返回值是一个对象，对象中指定新的状态
    this.setState((state, props) => { // state是原来的状态，props是当前组件的props
        console.log(props)
        return {count: state.count + 1}
    })

  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>当前求和为：{count}</h1>
        <button onClick={this.increment}>点我加1</button>
      </div>
    )
  }
}
