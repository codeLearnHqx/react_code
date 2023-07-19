import React, {useState, useContext, createContext} from 'react'
import './index.css'

const MyContext = createContext()
export default function A() {
    const [username, setUsername] = useState('tom')
    // 按钮的回调
    function changeName() {
        setUsername(state => state = 'jack')
    }

    return (
        <div className='parent'>
            <h3>我是A组件</h3>
            <h4>我的用户名是：{username}</h4>
            <button onClick={changeName}>点我改名</button>
            <MyContext.Provider value={username}>
                <B />
            </MyContext.Provider>
        </div>
    )
}


const B = () => {
    const username = useContext(MyContext)  
    return (
    <div className='child'>
        <h3>我是B组件</h3>
        <h4>我从A组件接收到的用户名是： {username}</h4>
        <C username={username}/>
    </div>
    )
}

const C = () => {

    const username = useContext(MyContext)  
    return (
      <div className='grand'>
        <h3>我是C组件</h3>
        <h4>我从A组件接收到的用户名是：{username}</h4>
      </div>
    )
}


