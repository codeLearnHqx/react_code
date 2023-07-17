// 引入React核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom/client'
// 引入App组件
import App from './App'


// React18推荐写法
const root = ReactDOM.createRoot(document.getElementById('root'))
// 渲染App组件到页面
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// React17的写法在React18中浏览器会报错,在不久后不被支持
// import ReactDOM from 'react-dom'
// ReactDOM.render(<App/>, document.getElementById('root'))

