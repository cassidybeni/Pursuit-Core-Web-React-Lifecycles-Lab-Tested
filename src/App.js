import React from "react";
import Todo from "./Todo"
import { ToastContainer } from "react-toastify";
import { v4 as uuid } from "uuid"

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      newTodo: "",
      todos: [],
    }
  }

  handleChange = (e) => {
    this.setState({ newTodo: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const todo = {
      id: uuid(),
      text: this.state.newTodo
    }
    this.setState({ todos: [...this.state.todos, todo] })
  }

  remove = (id) => {
    this.setState({ todos: this.state.todos.filter((todo) =>  todo.id !== id) })
  }

  render() {

    const { newTodo, todos } = this.state
  

    return (
      <div className="app">
        <ToastContainer />
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={newTodo} onChange={this.handleChange}></input>
        </form>
        <ul id="todos">
          {todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} remove={this.remove}/> 
          })}
        </ul>
        Give me something to do?!
      </div>
    );
  }
}

export default App;
