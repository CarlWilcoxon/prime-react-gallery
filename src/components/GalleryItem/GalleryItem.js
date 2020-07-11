import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {

  componentDidMount() {
    console.log(this.props);
    //DO stuff on load;
  }

  render() {
    return (
      <>
      <img src={this.props.eachItem.path} alt={this.props.eachItem.description} />
      <button onClick={this.props.clickHandler} id={this.props.eachItem.id} >{this.props.eachItem.likes} Like</button>
      {/* Setup 'template' for gallery item display */}
      </>
    );
  }
}

export default GalleryItem;
