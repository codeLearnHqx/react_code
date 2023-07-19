import React, {useState, memo} from 'react'
import './index.css'

/* 
    对函数式组件进行优化
    当父组件重新渲染时，子组件也会重新渲染，但是子组件的重新渲染是没有必要的，因为子组件没有使用到父组件的任何数据
    所以我们可以使用React.memo()方法对子组件进行包裹，这样子组件就不会随着父组件的重新渲染而重新渲染了
*/

export default function A() {
    const [carName, setCarName] = useState('奔驰c63')
    console.log('A组件重新渲染')
    return (
        <div className='parent'>
            <h2>我是A组件</h2>
            <span>我车的名字是：{carName}</span> <br />
            <button onClick={() => setCarName('迈巴赫')}>换车</button>
            <B />
        </div>
    )
}

const B = memo(() => {
    console.log('B组件重新渲染')
    return (
        <div className='children'>
            <h2>我是B组件</h2>
            <span>A组件的车是</span>
        </div>
    )
})
