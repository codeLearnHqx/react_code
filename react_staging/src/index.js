import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
/* React.StrictMode 会导致组件中的一些生命周期钩子执行两次 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
