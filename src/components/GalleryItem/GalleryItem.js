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
      {/* if the showPic boolean is true, display the picture, otherwise show the description */}
      {(this.state.showPic) ?
      <img src={this.props.eachItem.path} alt={this.props.eachItem.description} onClick={this.displayToggle}/>
      :
      <p onClick={this.displayToggle}> {/* if there is no description, display 'No description' */}
        {(this.props.eachItem.description) ? this.props.eachItem.description: 'No description.'}
      </p>
  }
      <button onClick={this.props.clickHandler} id={this.props.eachItem.id} >{this.props.eachItem.likes} Like</button>
      <button onClick={this.props.deleteHandler} id={this.props.eachItem.id} > Delete </button>
      {/* Setup 'template' for gallery item display */}
      </>
    );
  }
}

export default GalleryItem;
