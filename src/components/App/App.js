import React, { Component } from 'react';
import axios from 'axios';
import 'fontsource-roboto';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  state = {
    galleryArray: [{ id: 1,
      path: 'images/goat_small.jpg',
      description: 'Photo of a goat taken at Glacier National Park.',
      likes: 0 },
    { id: 2,
      path: 'images/malaysia_beaches.jpg',
      description: 'Me and my best friend on the beaches of Malaysia.',
      likes: 8}]
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

  // GalleryItem sends picID here, for the app to make the PUT request
  likePic = (picID) => {
    axios.put( '/gallery/like/' + picID )
    .then( (response) => {
      console.log( 'Pic liked ', picID );
      this.getPics();
    }).catch ( (err) => {
      console.log( 'Failed to like picture', err);
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
        <GalleryList pic={this.state.galleryArray} likePic={this.likePic} />
      </div>
    );
  }
}

export default App;
