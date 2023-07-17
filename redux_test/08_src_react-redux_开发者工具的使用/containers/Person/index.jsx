import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {

  addPerson =  () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = {id: nanoid(), name, age}
    this.props.createAddPersonAction(personObj)
  } 

  render() {
    console.log("UI组件接收到的props是：", this.props);
    return (
      <div>
        <h2>我是Person组件</h2>
        <div>上方组件求和为：{this.props.count}</div>
        <input ref={c => this.nameNode = c} type="text" placeholder="输入名字" />
        <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄" />
        <button onClick={this.addPerson}>添加</button>
        <ul>
            {
              this.props.persons.map( p => {
                return <li key={p.id}>{p.name}--{p.age}</li>
              })
            }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => (
    { 
      persons: state.persons,
      count: state.count
    }
  ),
  // 操纵状态的方法，对象属性名是方法名，属性值是方法本身，方法本身是一个action（对象简写）
  { createAddPersonAction }
)(Person)


