import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";
import "./App.css";

export default class App extends Component {
  state = {
    users: [],
    isFirst: true, // 是否为第一次打开页面
    isLoading: false, // 标识是否处于加载中
    err: "", // 存储请求相关的错误信息
  };

  // 更新App的state
  updataAppState = (stateObj) => {
    this.setState(stateObj);
  };

  render() {
    return (
      <div className="container">
        <Search updataAppState={this.updataAppState} />
        <List {...this.state} />
      </div>
    );
  }
}
