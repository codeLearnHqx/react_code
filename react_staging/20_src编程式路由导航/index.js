import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
/* React.StrictMode 会导致组件中的一些生命周期钩子执行两次 */
root.render(
  <React.StrictMode>
    {/* 同一个路由器管理整个应用 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
