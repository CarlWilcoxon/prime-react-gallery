import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {

  }

  componentDidMount() {
    this.getPics();
  }

  getPics = () => {

    axios.get('/gallery')
    .then( (response) => {
      console.log( 'Got pics', response.data);
      //this.setState({ TODO store the pictures })
    }).catch ( (err) => {
      console.log( 'failed to get pictures', err );
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg" alt="a small goat"/>
      </div>
    );
  }
}

export default App;
