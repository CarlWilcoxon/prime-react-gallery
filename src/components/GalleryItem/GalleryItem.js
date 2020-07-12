import React, { Component } from 'react';
import 'fontsource-roboto';
import './GalleryItem.css';
import Button from '@material-ui/core/Button';

class GalleryItem extends Component {

  state = {
    showPic: true
  }

  displayToggle = () => {
    this.setState({ showPic: !this.state.showPic });
  }

  likeButtonClicked = () => {
    this.props.likePic(this.props.eachItem.id);
  }

  deleteButtonClicked = () => {
    this.props.deleteHandler(this.props.eachItem.id)
  }

  render() {
    return (
      <>
      {/* if the showPic boolean is true, display the picture, otherwise show the description */}
      {(this.state.showPic) ?
      <img src={this.props.eachItem.path} alt={this.props.eachItem.description} onClick={this.displayToggle}/>
      :
      <p onClick={this.displayToggle}> {/* if there is no description, display 'No description' */}
        {(this.props.eachItem.description) ? this.props.eachItem.description: 'No description.'}
      </p>
  }
      <Button variant="contained" color="primary" onClick={this.likeButtonClicked} >{this.props.eachItem.likes} Likes</Button>
      <Button onClick={this.deleteButtonClicked} > Delete </Button>
      {/* Setup 'template' for gallery item display */}
      </>
    );
  }
}

export default GalleryItem;
