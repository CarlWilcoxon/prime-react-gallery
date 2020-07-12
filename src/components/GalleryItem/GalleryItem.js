import React, { Component } from 'react';
import 'fontsource-roboto';
import './GalleryItem.css';
import Button from '@material-ui/core/Button';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteIcon from '@material-ui/icons/Delete';
import { Card, CardContent } from '@material-ui/core';

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

    const imgStyles = {
      backgroundSize: "cover",
      minHeight: "200px"
    };

    return (
      <Card variant="outlined">
        {/* if the showPic boolean is true, display the picture, otherwise show the description */}
        {(this.state.showPic) ?
          <img src={this.props.eachItem.path} alt={this.props.eachItem.description} onClick={this.displayToggle}/>
          :
          <p onClick={this.displayToggle}> {/* if there is no description, display 'No description' */}
            {(this.props.eachItem.description) ? this.props.eachItem.description: 'No description.'}
          </p>
          }
        <CardContent style={imgStyles}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.likeButtonClicked}
            startIcon={<ThumbUpIcon />} >
              {this.props.eachItem.likes} Likes
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.deleteButtonClicked}
            startIcon={<DeleteIcon />}>
              Delete
          </Button>
        </CardContent>
        {/* Setup 'template' for gallery item display */}
      </Card>
    );
  }
}

export default GalleryItem;
