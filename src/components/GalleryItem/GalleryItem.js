import React, { Component } from 'react';
import 'fontsource-roboto';
import './GalleryItem.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Card, CardContent } from '@material-ui/core';

class GalleryItem extends Component {

  state = {
    showPic: true
  }
  componentDidMount() {
    //DO stuff on load;
    console.log(this);
  }

  displayToggle = () => {
    this.setState({ showPic: !this.state.showPic });
  }

  render() {


    return (
      <>
      <Card variant="outlined">
        {/* if the showPic boolean is true, display the picture, otherwise show the description */}
        {(this.state.showPic) ?
          <img src={this.props.eachItem.path} alt={this.props.eachItem.description} onClick={this.displayToggle}/>
          :
          <p onClick={this.displayToggle}> {/* if there is no description, display 'No description' */}
            {(this.props.eachItem.description) ? this.props.eachItem.description: 'No description.'}
          </p>
          }
        <CardContent>
          <Button
            variant="contained"
            color="primary"
            onClick={ () => {
                this.props.likePic(this.props.eachItem.id)}}
            startIcon={<ThumbUpIcon />} >
              {this.props.eachItem.likes} Likes
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={ () => {
              this.props.deleteHandler(this.props.eachItem.id)}}
            startIcon={<DeleteIcon />}>
              Delete
          </Button>
        </CardContent>
        {/* Setup 'template' for gallery item display */}
      </Card>
      </>
    );
  }
}

export default GalleryItem;
