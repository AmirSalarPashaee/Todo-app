import React, { Component } from "react";
import { observer } from "mobx-react";
import Filters from "./Filters";
import './index.css'
class TodoItem extends Component {
  state = { count: 0 };
  
  onToggle = () => {
    this.props.todo.toggle();
    //if(this.state.count > 1)
    this.setState({ count: this.state.count - 1 });
    
  };
  onEliminate = () => {
    this.props.todo.eliminate();
    this.props.counter(0);
  };
  clear = () => {
    if (this.props.aaa === true) this.props.todo.clear();
    //this.props.counter(0);
  };
  counter = count => {
    if (this.state.count !== count) this.setState({ count: count });
    this.props.counter(this.state.count);
  };
  render() {
    const { todo } = this.props;
    return (
      <div>
        <li className={todo.completed ? "completed" : ""}>
          <div className="view">
            <input
              onChange={this.onToggle}
              type="checkbox"
              className="toggle"
              value="on"
              checked={todo.completed}
            />
            <label>{todo.title}</label>
            <Filters count={this.counter} clearButton={this.props.clearButton}/>

            <button className="destroy" onClick={this.onEliminate} />

            {this.clear()}
          </div>
        </li>
      </div>
    );
  }
}

export default observer(TodoItem);
