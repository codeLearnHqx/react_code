import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {

  back = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.back}>回退</button>
        <button style={{marginLeft: '5px'}} onClick={this.forward}>前进</button>
        <button style={{marginLeft: '5px'}} onClick={this.go}>go</button>
      </div>
    );
  }
}
// withRouter 可以加工一般组件，让一般组件具备路由组件所特有的API
// withRouter 的返回值是一个新组件
export default withRouter(Header)
