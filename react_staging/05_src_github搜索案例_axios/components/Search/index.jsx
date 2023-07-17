import React, { Component } from "react";
import axios from "axios";


export default class Search extends Component {
    
  search = () => {
    // 获取用户输入
    const {keyWordElement: {value:keyword}} = this // 可以连续解构赋值并重命名
    // 发送请求前通知App更新状态
    this.props.updataAppState({isFirst: false, isLoading: true})
    // 发送网络请求
    axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
      (res) => {
        // 请求成功后通知App更新状态
        this.props.updataAppState({isLoading: false, users: res.data.items})
      },
      (err) => {
          // 请求失败后通知App更新状态
          this.props.updataAppState({isLoading: false, err: err.message})
        }
      )

  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
