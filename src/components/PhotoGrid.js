import React, { Component } from "react";
import { withStyles, Grid } from "@material-ui/core/";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import PhotoModal from "./PhotoModal";

import fake from "./fakeImages";
const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  inner: {
    margin: "auto"
  },
  gridList: {
    width: "100%",
    height: "100%",
    transform: "translateZ(0)"
  },
  tile: {}
});

function isFeaturedPhoto(idx) {
  return idx === 0 || idx === 6 || idx === 10 || idx === 16;
}

class PhotoGrid extends Component {
  state = {
    open: false,
    imgURL: ""
  };

  handleOpen = imgURL => {
    this.setState({ open: true, imgURL });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open, imgURL } = this.state;
    const { classes, imageData } = this.props;
    let images;
    if (imageData.length !== 0) {
      images = imageData.map(data => ({
        img: data.images.standard_resolution.url,
        title: "flower"
      }));
    } else {
      images = fake;
    }
    console.log(open);
    return (
      <div className={classes.root}>
        <Grid container justify="center" alignContent="center">
          <Grid className={classes.inner} item xs={11} lg={7}>
            {/* <div style={{ backgroundColor: 'green', height: 50, width: 50 }}></div> */}
            <GridList
              spacing={9}
              cellHeight={230}
              className={classes.gridList}
              cols={3}
            >
              {images.map((tile, i) => (
                //TODO: This is sloppy
                // <Photo key={tile.img} tile={tile} i={i} />
                <GridListTile
                  className={classes.tile}
                  key={tile.img}
                  cols={isFeaturedPhoto(i) ? 2 : 1}
                  onClick={() => this.handleOpen(tile.img)}
                >
                  <img src={tile.img} alt={tile.title} />
                </GridListTile>
              ))}
            </GridList>
          </Grid>
        </Grid>
        <PhotoModal
          open={open}
          imgURL={imgURL}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}

export default withStyles(styles)(PhotoGrid);
