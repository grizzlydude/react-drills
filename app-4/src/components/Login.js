import React, { Component } from 'react'

export default class Login extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleUsername(name){
    this.setState({
      username: name
    })
    console.log(name)
  }

  handlePassword(changepass){
    this.setState({
      password: changepass
    })
    console.log(this.password)
  }

  handleChange(){
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)  }


  render() {
    return (
      <div className="App">
        <input onChange={e => this.handleUsername(e.target.value)} type='text'/>
        <input onChange={e => this.handlePassword(e.target.value)} type='text'/>
        <button className='confimation' onClick={this.handleChange}>Login</button>
      </div>
    );
  }
}