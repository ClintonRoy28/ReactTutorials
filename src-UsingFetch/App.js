import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      })
  }
  render() {
    var { items, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>
    }
    else {
      return (
        <div>

          <ul>
            {items.map(item => (
              <li key={item.id}>
                Name: {item.name} | {item.email}
              </li>
            ))}
          </ul>

        </div>
      )
    }
  };
  // return (<div>ffdf</div>);
}


export default App;
