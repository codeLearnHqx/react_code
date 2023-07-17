import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home"; // 路由组件
import About from "./pages/About";
import Header from "./components/Header"; // 一般组件
import MyNavLink from "./components/MyNavLink";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        {/* 切换路由和注册路由都应该由同一个路由器去管理 */}
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 通过路由链接进行路由组件的切换 */}
              {/* 二次封装NavLink */}
              <MyNavLink to="/home">Home</MyNavLink>
              <MyNavLink to="/about">About</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                {/* 相同path的情况下只会匹配第一个path，而不会再往下匹配，可以提高路由的匹配效率 */}
                {/* exact={true}: 开启精准匹配 */}
                {/* 能不开则不开，不要一开始就开启精准匹配，否则可能会导致二级路由无法匹配的问题 */}
                {/* 多级路由从这里开始匹配，所以子路由都要加上一级路由的前缀，否则匹配不上 */}
                <Switch>
                  <Route path={"/about"} component={About} />
                  <Route path={"/home"} component={Home} />
                  <Redirect to="/home" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
