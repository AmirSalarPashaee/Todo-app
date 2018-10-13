import React, { Component } from "react";
import { observer } from "mobx-react";
import TodoStore from "../stores/TodoStore";
class Filters extends Component {
  render() {
    var v = 0;
    var count = 0;
    var clear=0
    return (
      <div>
        { TodoStore.todos.map(todo => {
          clear= todo.clearButton(clear)
          if(clear !=0)
            this.props.clearButton(true)
            else
            this.props.clearButton(false)

          count = todo.itemCount(count);
          todo.editID(v);
          v++;

        })}
        {this.props.count(count)}
        {}
      </div>
    );
  }
}

export default observer(Filters);
