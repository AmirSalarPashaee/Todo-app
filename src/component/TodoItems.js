import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoStore from "../stores/TodoStore";
import { observer } from "mobx-react";
import './index.css'
class TodoItems extends Component {
  render() {
    return (
      <div>
        <section className="main">
          <ul className="todo-list">
            {TodoStore.todos.map(todo => {
              if (this.props.cases === "Completed") {
                if (todo.completed !== false)
                  return (
                    <TodoItem
                      todo={todo}
                      aaa={this.props.clear}
                      counter={this.props.counter}
                      clearButton={this.props.clearButton}
                    />
                  );
              }
              if (this.props.cases === "Active") {
                if (todo.completed !== true)
                  return (
                    <TodoItem
                      todo={todo}
                      aaa={this.props.clear}
                      counter={this.props.counter}
                      clearButton={this.props.clearButton}
                    />
                  );
              }
              if (this.props.cases === "All")
                return (
                  <TodoItem
                    todo={todo}
                    aaa={this.props.clear}
                    counter={this.props.counter}
                    clearButton={this.props.clearButton}
                  />
                );
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default observer(TodoItems);
