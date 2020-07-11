import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryItem from '../GalleryItem/GalleryItem';

class App extends Component {

  state = {
    galleryArray: []
  }

  componentDidMount() {
    this.getPics();
  }

  getPics = () => {

    axios.get('/gallery')
    .then( (response) => {
      console.log( 'Got pics', response.data);
      this.setState({ galleryArray: response.data });
    }).catch ( (err) => {
      console.log( 'Failed to get pictures', err );
    })
  }

  likePic = (event) => {

    console.log( event.target ); //.prop.id
    // let picID = event.target.prop.id;

    // axios.put( '/like/' + picID )
    // .then( (response) => {
    //   console.log( 'Pic liked ', picID );
    // }).catch ( (err) => {
    //   console.log( 'Failed to like picture', err);
    // })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <GalleryItem pic={this.state.galleryArray[0]} clickHandler={this.likePic}/>
      </div>
    );
  }
}

export default App;
