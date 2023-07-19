import React, { Component, lazy, Suspense } from "react";
import { NavLink, Route } from "react-router-dom";

import Loading from "./Loading";

// 这不是路由懒加载的写法
// import Home from "./Home";
// import About from "./About";

// 通过变量的方式引入路由组件实现路由懒加载
const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))



export default class Demo extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        {/* 切换路由和注册路由都应该由同一个路由器去管理 */}
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 切换路由 */}
              <NavLink activeClassName="active" className="list-group-item" to="/about">
                About
              </NavLink>
              <NavLink activeClassName="active" className="list-group-item" to="/home">
                Home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Suspense fallback={<Loading/>}>
                  <Route path={"/about"} component={About} />
                  <Route path={"/home"} component={Home} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
