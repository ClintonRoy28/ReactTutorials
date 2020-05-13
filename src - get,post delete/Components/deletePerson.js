import React, { Component } from 'react'
import axios from 'axios';


export default class DeletePerson extends Component {

    constructor(props) {
        super(props)
        this.state = { id: 0 }
    }

    handleChange = event => {
        this.setState({ id: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
    }

    render() {
        return (<form onSubmit={this.handleSubmit}>
            <label>Enter the ID to be deleted: <input type="number" name="id" onChange={this.handleChange} /></label>

            <button>Delete</button>
        </form>)
    }


}