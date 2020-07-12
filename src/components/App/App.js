import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryForm from '../GalleryForm/GalleryForm';
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

    // GET request to get all the pics from the database
    axios.get('/gallery')
    .then( (response) => {
      console.log( 'Got pics', response.data);
      this.setState({ galleryArray: response.data });
    }).catch ( (err) => {
      console.log( 'Failed to get pictures', err );
    })
  }

//TODO onclick swap image with the description

  likePic = (event) => {

    //use the id property to tell the server -> database which pic to like
    console.log( event.target.id );
    let picID = event.target.id;

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
        <GalleryForm />
        <GalleryList pic={this.state.galleryArray} clickHandler={this.likePic} />
      </div>
    );
  }
}

export default App;
