import React, { Component } from 'react'
// import qs from 'qs'

const data = [
    {id: '01', content: '你好，中国'},
    {id: '02', content: '你好，编程'},
    {id: '03', content: '你好，黄启兴'}
]

export default class Detail extends Component {
  render() {
    // 接收params参数
    // const { id, title } = this.props.match.params

    // 接收search参数
    // const {search} = this.props.location
    // const {id, title} = qs.parse(search.slice(1)) // qs用于解析urlencoded编码 （id=01&title=消息1），将字符串转换成对象形式
    
    // 接收state参数
    const {id, title} = this.props.location.state || {} // 解决当state为undefind出现的问题
    // 返回具体id对应的数据
    const findResult = data.find((obj) => {
        return obj.id === id
    }) || {}
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    )
  }
}
