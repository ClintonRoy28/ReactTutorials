import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PersonList from './Components/PersonDisplayList'
import PersonInput from './Components/PersonInput'
import DeletePerson from './Components/deletePerson';
class App extends Component {
 

  render() {
    return (<div>
      From App.js

      <PersonList />
      <PersonInput/>

      <DeletePerson/>

      
    </div>
    )
  }


}


export default App;
