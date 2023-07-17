import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; // 用于记录页面的性能

const root = ReactDOM.createRoot(document.getElementById('root'));

// React.StrictMode标签会检查组件中代码写的不合理的地方，比如 ref="demo" 使用字符串这种官方不推荐的写法
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
