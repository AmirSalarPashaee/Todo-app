import React, { Component } from "react";
import TodoStore from '../stores/TodoStore'
import './index.css'

class TodoEntry extends Component {
  state={
    value:''
  }

  handleKeyDown = events =>{
    
    events.preventDefault()
    TodoStore.addTodo(this.state.value)
    this.setState({
      value:''
    })
  }
  render() {
    return (
      <div>
        <header className="header">
          <h1> todo </h1>
          <input
          value={this.state.value}
          onChange={event=>this.setState({value:event.target.value}) }
          onKeyDown={event=>{
            if(event.keyCode == 13)
              this.handleKeyDown(event)

          }}
            type="text"
            className="new-todo"
            placeholder="what needs to be done?"
          />
        </header>
      </div>
    );
  }
}

export default TodoEntry;
