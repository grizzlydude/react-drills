import React, { Component } from "react";
import "./App.css";
import ToDo from './ToDo'

class App extends Component {
  constructor() {
    super()

    this.state = {
      input: '',
      List: []

    }
    this.addToListTask = this.addToListTask.bind(this)
  }

  handleInput(val) {
    this.setState({
      input: val
    })
  }

  addToListTask() {
    this.setState({
      List: [...this.state.List, this.state.input],
      input: ''
    })
  }

  render() {
    let list = this.state.List.map((element, index) => {
      return <ToDo key={index} task={element} />
    })

    return (
      <div className="App">
        <h4>My To-Do List:</h4>
        <div className="addingToList">
          <input onChange={(e) => this.handleInput(e.target.value)}
            type='string'
            placeholder='Enter newTask' />
          <button className='confimationButton'
            onClick={this.addToListTask}>Add</button>
        </div>

        <br />

        {list}
      </div>
    );
  }
}

export default App;
