import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./index.css";

export default class List extends Component {

  state = {
    users: [],
    isFirst: true, // 是否为第一次打开页面
    isLoading: false, // 标识是否处于加载中
    err: "", // 存储请求相关的错误信息
  };

  // dom节点挂载完毕后
  componentDidMount() {
    // 订阅消息
    this.token = PubSub.subscribe('hqx', (_, stateObj) => { // 有参数但不想用，可以用 _ 占位
      this.setState(stateObj)
      console.log(stateObj)
    })
  }

  // 组件将被卸载掉的时候
  componentWillUnmount() {
    // 取消订阅
    PubSub.unsubscribe(this.token)
  }

  render() {
    const { users, isFirst, isLoading, err } = this.state;
    return (
      <div className="row">
        {
          // 多个三元表达式连续写的方式
          isFirst ? (
            <h2>欢迎使用，输入关键字，随后点击搜索</h2>
          ) : isLoading ? (
            <h2>Loading......</h2>
          ) : err ? (
            <h2 style={{ color: "red" }}>{err}</h2>
          ) : (
            users.map((user) => {
              return (
                <div key={user.id} className="card">
                  <a
                    href={user.html_url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      alt="图片"
                      src={user.avatar_url}
                      style={{ width: "100px" }}
                    />
                  </a>
                  <p className="card-text">{user.login}</p>
                </div>
              );
            })
          )
        }
      </div>
    );
  }
}
