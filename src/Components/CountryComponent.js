import React, { Component } from 'react'
import axios from 'axios'

export default class CountryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryNames: [],
            loading: false
        }
    }


    componentWillMount() {
        this.setState({ loading: true })
        // fetch(`https://restcountries.eu/rest/v2/all`)
        //     .then(response => response.json())
        //     .then(json => json.map(country => country.name))
        //     .then(countryNames => this.setState({ countryNames, loading: false }))

        axios.get(`https://restcountries.eu/rest/v2/all`)
            .then(res => { 
                // 0console.log(res.data.map((x) => x.name))
                 this.setState({ countryNames: res.data.map((x) => x.name), loading: false }) 
            })
    }

    render() {
        const { countryNames , loading } = this.state;

        return (loading) ?
            <div>Loading...Please wait...</div> :
            (!countryNames.length) ?
                <div>No country names</div> :
                <ul>
                    {countryNames.map((x, i) => <li key={i}>{x}</li>)}
                </ul>
    }
}