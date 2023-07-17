import React, { Component } from "react";
import PropTypes from "prop-types"
import Item from "../Item";
import "./index.css";

export default class List extends Component {
  // 对接收的props进行： 类型、必要性的限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updataTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }
  render() {
    const { todos, updataTodo, deleteTodo } = this.props;
    return (
      <ul className="todo-main">
        {
          todos.map((todo) => {
            return <Item updataTodo={updataTodo} deleteTodo={deleteTodo} key={todo.id} {...todo} />;
          })
        }
      </ul>
    );
  }
}
