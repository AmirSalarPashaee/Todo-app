(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,a){t.exports=a(19)},15:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),c=a(8),r=a.n(c),s=(a(15),a(2)),l=a(3),i=a(5),u=a(4),p=a(6),d=a(1),m=function t(e,a,n,o){var c=this;Object(s.a)(this,t),this.toggle=Object(d.d)(function(){c.completed=!c.completed}),this.eliminate=Object(d.d)(function(){c.store.todos.splice(c.id,1)}),this.editID=Object(d.d)(function(t){c.id=t}),this.itemCount=Object(d.d)(function(t){return!1===c.completed&&t++,t}),this.clearButton=Object(d.d)(function(t){return!0===c.completed&&t++,t}),this.clear=Object(d.d)(function(){!0===c.completed&&c.store.todos.splice(c.id,1)}),Object(d.g)(this,{store:e,id:o,title:a,completed:n})},h=new function t(){var e=this;Object(s.a)(this,t),this.addTodo=Object(d.d)(function(t){e.todos.push(new m(e,t,!1,e.lastID)),e.lastID++}),Object(d.g)(this,{todos:[]}),this.lastID=0},f=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={value:""},a.handleKeyDown=function(t){t.preventDefault(),h.addTodo(a.state.value),a.setState({value:""})},a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement("header",{className:"header"},o.a.createElement("h1",null," todo "),o.a.createElement("input",{value:this.state.value,onChange:function(e){return t.setState({value:e.target.value})},onKeyDown:function(e){13==e.keyCode&&t.handleKeyDown(e)},type:"text",className:"new-todo",placeholder:"what needs to be done?"})))}}]),e}(n.Component),b=a(7),v=function(t){function e(){return Object(s.a)(this,e),Object(i.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=0,a=0,n=0;return o.a.createElement("div",null,h.todos.map(function(o){0!=(n=o.clearButton(n))?t.props.clearButton(!0):t.props.clearButton(!1),a=o.itemCount(a),o.editID(e),e++}),this.props.count(a))}}]),e}(n.Component),O=Object(b.a)(v),j=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={count:0},a.onToggle=function(){a.props.todo.toggle(),a.setState({count:a.state.count-1})},a.onEliminate=function(){a.props.todo.eliminate(),a.props.counter(0)},a.clear=function(){!0===a.props.aaa&&a.props.todo.clear(),a.props.counter(0)},a.counter=function(t){a.state.count!==t&&a.setState({count:t}),a.props.counter(a.state.count)},a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props.todo;return o.a.createElement("div",null,o.a.createElement("li",{className:t.completed?"completed":""},o.a.createElement("div",{className:"view"},o.a.createElement("input",{onChange:this.onToggle,type:"checkbox",className:"toggle",value:"on",checked:t.completed}),o.a.createElement("label",null,t.title),o.a.createElement(O,{count:this.counter,clearButton:this.props.clearButton}),o.a.createElement("button",{className:"destroy",onClick:this.onEliminate}),this.clear())))}}]),e}(n.Component),E=Object(b.a)(j),y=function(t){function e(){return Object(s.a)(this,e),Object(i.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement("section",{className:"main"},o.a.createElement("ul",{className:"todo-list"},h.todos.map(function(e){return"Completed"===t.props.cases&&!1!==e.completed?o.a.createElement(E,{todo:e,aaa:t.props.clear,counter:t.props.counter,clearButton:t.props.clearButton}):"Active"===t.props.cases&&!0!==e.completed?o.a.createElement(E,{todo:e,aaa:t.props.clear,counter:t.props.counter,clearButton:t.props.clearButton}):"All"===t.props.cases?o.a.createElement(E,{todo:e,aaa:t.props.clear,counter:t.props.counter,clearButton:t.props.clearButton}):void 0}))))}}]),e}(n.Component),g=Object(b.a)(y),w=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).clear=function(){a.props.clearer(!0)},a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t,e=this;return 1==this.props.button&&(t=o.a.createElement("div",{className:"clear-completed",onClick:function(){e.clear()}},"clear component")),o.a.createElement("div",{className:"footer"},o.a.createElement("li",{className:"todo-count strong"},this.props.count," list Item "),o.a.createElement("div",{className:"filters"},o.a.createElement("li",null,o.a.createElement("a",{onClick:function(){e.props.stateOf("All")}},"All"),o.a.createElement("a",{onClick:function(){e.props.stateOf("Active")}},"Active"),o.a.createElement("a",{onClick:function(){e.props.stateOf("Completed")}},"completed"))),t)}}]),e}(n.Component),k=Object(b.a)(w),C=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={cases:"All",count:0,button:!1},a.stateOf=function(t){switch(t){case"Completed":a.setState({cases:"Completed"});break;case"Active":a.setState({cases:"Active"});break;case"All":a.setState({cases:"All"})}},a.clearer=function(t){a.setState({clear:t})},a.default=function(){!0===a.state.clear&&a.setState({clear:!1})},a.counter=function(t){a.state.count!==t&&a.setState({count:t})},a.clearButton=function(t){a.setState({button:t})},a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t;return console.log(this.state.count),"undefined"===typeof h.todos[0]&&0===this.state.count||(t=o.a.createElement(k,{stateOf:this.stateOf,clearer:this.clearer,count:this.state.count,button:this.state.button})),o.a.createElement("div",{id:"todoapp",className:"todoapp"},o.a.createElement(f,null),o.a.createElement(g,{cases:this.state.cases,clear:this.state.clear,counter:this.counter,clearButton:this.clearButton}),t,this.default())}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.59c89126.chunk.js.map