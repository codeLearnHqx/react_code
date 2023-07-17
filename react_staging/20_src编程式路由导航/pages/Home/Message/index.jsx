import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "消息1" },
      { id: "02", title: "消息2" },
      { id: "03", title: "消息3" },
    ],
  }
  // 通过点击按钮进行replace跳转
  replaceShow = (id, titile) => {
    this.props.history.replace(`/home/message/detail/${id}/${titile}`);
  }

  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((msgObj) => {
              return (
                <li key={msgObj.id} style={{marginTop: '5px'}}>
                  {/* 向路由组件传递params参数 */}
                  {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

                  {/* 向路由组件传递search参数 */}
                  {/* <Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                  {/* 向路由组件传递state参数 */}
                  <Link to={{pathname:'/home/message/detail', state: {id: msgObj.id, title: msgObj.title}}}>{msgObj.title}</Link>

                  <button style={{margin: '0 10px'}}>push查看</button>
                  <button onClick={() => this.replaceShow(msgObj.id, msgObj.title)} style={{margin: '0 10px'}}>replace查看</button>

                </li>
              );
            })
          }
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

        {/* search参数无需声明接收，正常注册即可 */}
        {/* <Route path="/home/message/detail" component={Detail}/> */}

        {/* state参数无需声明接收，正常注册即可 */}
        <Route path="/home/message/detail" component={Detail}/>
      </div>
    );
  }
}
