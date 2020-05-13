import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  async postData() {
    // alert("hellooooo")
    try {
      let result = await fetch('https://webhook.site/9207600e-23ae-4bad-9cb2-e21da218baf0', {
        method: 'post',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          key1: 'myusername',
          username: 'clintonroy@gmail.com',
          randomData: 'I love react. I love Javascript!!!'
        })
      }
      )
      // console.log('Result',+result)
      console.log(result)

    }
    catch (e) {
      console.log(e)
    }

  }

  render() {
    return (<div>
      <button onClick={() => this.postData()}>Click me to post some data</button>
    </div>
    )
  }


}


export default App;
