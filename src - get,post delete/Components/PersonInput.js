import React, { Component } from 'react'
import axios from 'axios'

export default class PersonInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    handleChange = event => {
        this.setState({ name: event.target.value })

    }
    handleSubmit = event => {
        event.preventDefault()

        const user = {
            name: this.state.name
        }

        axios.post('https://jsonplaceholder.typicode.com/users', { user })
            .then(res => { console.log(res)
            console.log(res.data) })
    }

    render() {

        return (<form onSubmit={this.handleSubmit}>
            <label>ENter the name to be posted: <input type="text" name="name" onChange={this.handleChange} /></label>
            <button type="submit">Add</button>
        </form>)
    }

}