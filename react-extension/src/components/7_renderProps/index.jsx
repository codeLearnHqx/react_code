import React, {useState} from 'react'
import './index.css'


/* 
    向组件内部动态传入带内容的结构(标签)
*/

export default function Parent() {
  return (
    <div className='parent'>
        <h3>我是Parent组件</h3>
        <A render={name => <B name={name}/>}/>
    </div>
  )
}

const A = ({render}) => {
    const [name] = useState('tom')
    return (
        <div className='a'>
            <h3>我是A组件</h3>
            {
                render(name)
            }
        </div>
    )
}


const B = ({name}) => {
    return (
        <div className='b'>
            <h3>我是B组件</h3>
            <h4>我从A组件接收到的用户名是：{name}</h4>
        </div>
    )
}