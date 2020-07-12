import React, { Component } from 'react';
import 'fontsource-roboto';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';
import { Grid } from '@material-ui/core';

class GalleryList extends Component {

  componentDidMount() {
    //DO stuff on load;
  }


  render() {
    return (
      <>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="space-around"
        alignItems="baseline"
      >
      {this.props.pic.map( eachItem =>
                <Grid item xs={4} key={eachItem.id}>
                  <GalleryItem
                  eachItem={eachItem}
                  likePic={this.props.clickHandler}
                  deleteHandler={this.props.deletePic} />
                </Grid>)}
      {/* Setup map to go through array of gallery items */}
      </Grid>
      </>
    );
  }
}

export default GalleryList;
