import React, { Component } from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {

  componentDidMount() {
    //DO stuff on load;
  }


  render() {
    return (
      <>
      {this.props.pic.map( eachItem =>
                <GalleryItem key={eachItem.id}
                eachItem={eachItem}
                clickHandler={this.props.clickHandler}
                deleteHandler={this.props.deleteHandler} />)}
      {/* Setup map to go through array of gallery items */}
      </>
    );
  }
}

export default GalleryList;
