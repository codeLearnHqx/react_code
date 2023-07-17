import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// 检测redux中状态的变化，只要变化，就调用render
// diff算法会帮我们比较新旧虚拟DOM的差异, 只更新差异部分，不会重新渲染整个页面
// store.subscribe(() => {
//     root.render(
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     )
// })