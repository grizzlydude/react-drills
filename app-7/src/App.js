import React, { Component } from "react";
import "./App.css";
import NewTask from './components/NewTask'
import List from './components/List'

class App extends Component {
  constructor() {
    super()

    this.state = {
      list: []
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleAddTask(task) {
    this.setState({
      list: [...this.state.list, task]
    })
  }

  render() {
    return (
      <div className="App">
        <h4>My To-Do List:</h4>

        <NewTask add={this.handleAddTask} />
        <List task={this.state.list} />

      </div>
    );
  }
}

export default App;
