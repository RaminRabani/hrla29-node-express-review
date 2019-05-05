import React, { Component } from "react";
import axios from "axios";
import ListEntry from "./ListEntry.jsx";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todos: [],
      listName: "Todos"
    };
    this.fetchTodos = this.fetchTodos.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount() {
    console.log('im inside component did mount')
    this.fetchTodos();
  }

  fetchTodos() {
    //always need params for delete and gets under axios because it comes back under req.query
    axios
      .get('/api/todoList', { params: { listName: this.state.listName}})
      .then( ({data}) => {
        console.log(data)
        this.setState({
          todos: data
        })
      })
      .catch( err => console.log('Error getting items', err));
  }

  handleInput(e) {
    this.setState({
      todo: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { todo, listName } = this.state;

    axios
      .post('/api/todoList', {todo, listName})
      .then(() => this.fetchTodos())
      .catch(err => console.log('Error posting', err))

    e.target.reset();
  }

  deleteTodo(id) {
    //always need params for delete and gets under axios because it comes back under req.query
    axios
      .delete('/api/todoList', {params: {id}})
      .then( () => this.fetchTodos())
      .catch( err => console.log('Error deleting', err))
  }

  render() {
    console.log('inside render')
    return (
      <div>
        <h1>{this.state.listName}</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          Add Todo: <input onKeyUp={this.handleInput} />
        </form>
        <br />
        <div>
          {this.state.todos.map((todo, index) => (
            <ListEntry key={index} todo={todo.todo} id={todo.id} delete={this.deleteTodo} />
          )
          )}
        </div>
      </div>
    );
  }
}

export default List;
