import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {

  state = {
    showPic: true
  }

  displayToggle = () => {
    this.setState({ showPic: !this.state.showPic });
  }

  render() {
    return (
      <>
      {(this.state.showPic) ?
      <img src={this.props.eachItem.path} alt={this.props.eachItem.description} onClick={this.displayToggle}/>
      :
      <p onClick={this.displayToggle}>{this.props.eachItem.description}</p>
  }
      <button onClick={this.props.clickHandler} id={this.props.eachItem.id} >{this.props.eachItem.likes} Like</button>
      {/* Setup 'template' for gallery item display */}
      </>
    );
  }
}

export default GalleryItem;
