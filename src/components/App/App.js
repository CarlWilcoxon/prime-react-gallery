import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
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

    axios.get('/gallery')
    .then( (response) => {
      console.log( 'Got pics', response.data);
      this.setState({ galleryArray: response.data });
    }).catch ( (err) => {
      console.log( 'Failed to get pictures', err );
    })
  }

  deletePic = (event) => {

    console.log( event.target.id );
    let picID = event.target.id;

    axios.delete('/gallery/delete/' + picID )
    .then( (response) => {
      console.log( 'Pic deleted', picID );
      this.getPics();
    }).catch ( (err) => {
      console.log( 'Failed to delete pictures', err );
    })
  }

  likePic = (event) => {

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
        <p>Gallery goes here</p>
        <GalleryForm />
        <GalleryList pic={this.state.galleryArray} clickHandler={this.likePic}
        deleteHandler={this.deletePic} />
      </div>
    );
  }
}

export default App;
