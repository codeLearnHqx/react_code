import React from 'react';
import ReactDOM from 'react-dom/client';
// Provider组件，可以让所有的组件都可以得到store
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    /* 此处需要 Provider 包裹App，目的是让App所有的后代容器组件都能接收到store*/
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)

// react-redux帮我们进行了封装，不需要手动订阅
// 检测redux中状态的变化，只要变化，就调用render
// diff算法会帮我们比较新旧虚拟DOM的差异, 只更新差异部分，不会重新渲染整个页面
// store.subscribe(() => {
//     root.render(
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     )
// })