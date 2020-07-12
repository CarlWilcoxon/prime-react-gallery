import React, { Component } from 'react';
import axios from 'axios';
import './GalleryForm.css';

class GalleryForm extends Component {

  state = {
    newPhoto:{
      path: '',
      description: '',
      likes: 0
    }
  }

  clearInputs = () => {
    this.setState({
      newPhoto:{
        path: '',
        description: '',
        likes: 0
      }
    })
  }

  handleChangeFor = (event, propertyName) => {
    this.setState({
      newPhoto: {
        ...this.state.newPhoto,
        [propertyName]: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.addNewPhoto( this.state.newPhoto );
  }

  componentDidMount() {
    //DO stuff on load;
  }

  addNewPhoto = (photo) => {
    console.log(photo);
    axios.post('/gallery', photo)
    .then( (response) => {
      console.log( 'Added new pic', response.data);
      this.clearInputs();
    }).catch ( (err) => {
      console.log( 'Failed to add picture', err );
    })
  }

  render() {
    return (
      <>
      <form>
        <label>Description:</label>
        <input type="text" value={this.state.newPhoto.description}
          onChange={(event) => this.handleChangeFor(event, 'description')} />
  <br/>
        <label>Photo Path:</label>
        <input type="text" value={this.state.newPhoto.path}
          onChange={(event) => this.handleChangeFor(event, 'path')} />
  <br/>
        <button onClick={ this.handleSubmit }>Submit</button>
      </form>
      </>
    );
  }
}

export default GalleryForm;
