import React, { Component } from 'react'

const data = [
    {id: '01', content: '你好，中国'},
    {id: '02', content: '你好，编程'},
    {id: '03', content: '你好，黄启兴'}
]

export default class Detail extends Component {
  render() {
    // 接受params参数
    const { id, title } = this.props.match.params
    // 返回具体id对应的数据
    const findResult = data.find((obj) => {
        return obj.id === id
    })
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    )
  }
}
