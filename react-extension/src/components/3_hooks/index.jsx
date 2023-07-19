import React from 'react'
import {root} from '../../index'
// 类式组件
// class Demo extends React.Component {
  
//   state = {count: 0} 

//   add = () => {
//     this.setState(state => ({count: state.count + 1}))
//   }

//   render() {
//     return (
//       <div>
//         <h2>当前求和为{this.state.count}</h2>
//         <button onClick={this.add}>点我加1</button>
//       </div>
//     )
//   }
// }


// 函数式组件
function Demo() {
    // 第1个为内部当前状态值, 第2个为更新状态值的函数，useState(0)中的0为初始值
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('hqx')
    const myRef = React.useRef()

    /* 
        可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
         1. 发ajax请求数据获取
         2. 设置订阅 / 启动定时器
         3. 手动更改真实DOM
    */
    // 1. 模拟类式组件中的componentDidMount  执行1次
    React.useEffect(() => {
        console.log('此时相当于类式组件中的componentDidMount')
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        // 2. 模拟类式组件中的componentWillUnmount
        return () => {
            // 清除定时器
            clearInterval(timer)
            console.log('此时相当于类式组件中的componentWillUnmount')
        }
    }, [])

    // 3. 模拟类式组件中的componentDidUpdate  执行1+n次
    // React.useEffect(() => {
    //     console.log('此时相当于类式组件中的componentDidUpdate')
    // })

    /* 3.1 监测指定的state    执行1+n次 */
    // React.useEffect(() => {
    //     console.log('监测指定的state')
    // }, [name])


    // 卸载组件
    function unmount() {
        root.unmount()
    }    
    // 显示输入数据
    function show() {
        alert(myRef.current.value)
    }

    function add() {
        // 写法1
        // setCount(count + 1)

        // 写法2
        setCount(count => count + 1) 
    }

    function changeName() {
        setName('hahahh')
        
    }

    return (
        <div>
         <input type="text" ref={myRef}/>
         <h2>当前求和为{count}</h2>
         <h2>我的名字是：{name}</h2>
         <button onClick={add}>点我加1</button>
         <button onClick={changeName}>点我改名</button>
         <button onClick={unmount}>卸载组件</button>
         <button onClick={show}>点我提示数据</button>
       </div>
    )
}



export default Demo
