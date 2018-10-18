import React, { Component } from "react";
import TodoEntry from "./component/TodoEntry";
import TodoItems from "./component/TodoItems";
import TodoFooter from "./component/TodoFooter";
import TodoStore from "./stores/TodoStore";
import './index.css'

class App extends Component {
  state = {
    cases: "All",
    count: 0,
    button:false
  };

  stateOf = states => {
    switch (states) {
      case "Completed":
        this.setState({
          cases: "Completed"
        });
        break;

      case "Active":
        this.setState({
          cases: "Active"
        });
        break;

      case "All":
        this.setState({
          cases: "All"
        });
        break;
    }
  };

  clearer = clear => {
    this.setState({ clear: clear });
  };
  default = () => {
    if (this.state.clear === true) this.setState({ clear: false });
  };

  counter = count => {
    if (this.state.count !== count) this.setState({ count: count });
  };
  clearButton = t =>{
    this.setState({button:t})
  };

  render() {
    var log;
   
    if (typeof TodoStore.todos[0] !== "undefined" ) {
      log = (
        <TodoFooter
          stateOf={this.stateOf}
          clearer={this.clearer}
          count={this.state.count}
          button={this.state.button}

        />
      );
    }
     
    return (
      <div id="todoapp" className="todoapp">
        <TodoEntry />
        <TodoItems
          cases={this.state.cases}
          clear={this.state.clear}
          counter={this.counter}
          clearButton={this.clearButton}
        />
        {log}
        {this.default()}
      </div>
    );
  }
}

export default App;
