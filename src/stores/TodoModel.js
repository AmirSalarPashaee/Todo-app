import { observabel, action, extendObservable } from "mobx";

export default class TodoModel {
  constructor(store, title, completed, id) {
    //   this.store=store

    extendObservable(this, {
      store: store,
      id: id,
      title: title,
      completed: completed
    });
  }

  toggle = action(() => {
    this.completed = !this.completed;
  });
  eliminate = action(() => {
    this.store.todos.splice(this.id , 1);
  });
  editID = action(id => {
    this.id = id;
  });
  itemCount = action(count => {
    if (this.completed === false) count++;
    return count;
  });
  clearButton = action(count => {
    if (this.completed === true) count++;
    return count;
  });
  clear = action(() => {
    if (this.completed === true) this.store.todos.splice(this.id , 1);
    //console.log(this.id)
  });
}
