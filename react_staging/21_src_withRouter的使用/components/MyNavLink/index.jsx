import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MyNavLink extends Component {
  render() {
    /* this.props.children是组件体中的内容，可以通过此方式得到传入当前组件的内容，也可以将其传入到下面组件的标签体中（标签体内容是一个特殊的标签属性） */
    return (
      <NavLink activeClassName="active" className="list-group-item" {...this.props}></NavLink>
    )
  }
}
