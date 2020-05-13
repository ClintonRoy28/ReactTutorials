import React from 'react'
import { Component } from 'react'
import axios from 'axios'

export default class PersonList extends Component {


    constructor(props) {
        super(props)
        this.state = {
            persons: []
        }

    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => { this.setState({ persons: res.data }) })
    }

    render() {
        // var {person} = this.state;
        return (<ul>
            {this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}

        </ul>

        )
    }
}