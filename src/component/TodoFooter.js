import React, { Component } from "react";
import {observer} from 'mobx-react'
import './index.css'
class TodoFooter extends Component {
    
    clear=()=>{
       this.props.clearer(true)
            }
  render() {
    var b;
    if (this.props.button == true  )
      b=<div className='clear-completed' onClick={()=>{this.clear()}}>
      clear component
    </div>
  return (
    
    <div className="footer">
    <li className="todo-count strong">{this.props.count} list Item </li>   
    <div className="filters">
    <li >
    <a href="#" onClick={()=>{ this.props.stateOf('All')} } >All</a>
    <a href="#" onClick={()=>{ this.props.stateOf('Active')}  } >Active</a> 
    <a href="#" onClick={()=>{ this.props.stateOf('Completed')}  }>completed</a>         
      </li>   
    </div>
   {b}
             
              </div>
                
    
    );
  }
}

export default observer(TodoFooter)
