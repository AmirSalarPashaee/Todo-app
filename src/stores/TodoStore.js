import { observabel, action, extendObservable } from "mobx";
import TodoModel from "./TodoModel.js";

class TodoStore {
  constructor() {
    extendObservable(this, {
      todos: []
    });
    this.lastID = 0;
}


  addTodo = action(title => {
    //console.log(this.lastID)
    this.todos.push(new TodoModel(this, title, false, this.lastID));
    this.lastID++;

  });
  
}

const store = new TodoStore();
export default store;
