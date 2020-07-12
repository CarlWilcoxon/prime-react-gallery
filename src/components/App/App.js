import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryForm from '../GalleryForm/GalleryForm';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  state = {
    galleryArray: [{ id: 0,
      path: '',
      description: '',
      likes: 0}]
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

  deletePic = (picID) => {

    // Use the passed id property to tell the server -> database which pic to delete
    axios.delete('/gallery/delete/' + picID )
    .then( (response) => {
      console.log( 'Pic deleted', picID );
      this.getPics();
    }).catch ( (err) => {
      console.log( 'Failed to delete pictures', err );
    })
  }

  likePic = (picID) => {

    // Use the passed id property to tell the server -> database which pic to like
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
        <br />
        <GalleryList pic={this.state.galleryArray} clickHandler={this.likePic}
        deletePic={this.deletePic} />
      </div>
    );
  }
}

export default App;
