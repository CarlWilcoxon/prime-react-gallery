import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {

  state = {

  }

  componentDidMount() {
    //DO stuff on load;
  }


  render() {
    return (
      <>
        <img src={this.props.pic.path} alt={this.props.pic.description} onClick={this.props.clickHandler}/>
      {/* Setup 'template' for gallery item display */}
      </>
    );
  }
}

export default GalleryItem;
