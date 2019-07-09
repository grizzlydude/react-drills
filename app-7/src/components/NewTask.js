import React, { Component } from 'react'

export default class NewTask extends Component {
    constructor() {
        super()

        this.state = {
            list: [],
            input: ''
        }
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleInput(val) {
        this.setState({
            input: val
        })
    }

    handleAdd() {
        this.props.add(this.state.input)
        this.setState({
            input: ''
        })
    }

    render() {
        return (
            <div className='NewTask'>
                <input value={this.state.input}
                    onChange={e => this.handleInput(e.target.val)}
                    type='string'
                    placeholder='Enter new task' />
                <button onClick={this.addToListTask}>Add</button>
            </div>
        )
    }
}