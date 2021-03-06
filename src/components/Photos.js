import React, { Fragment, Component } from "react";
import { withStyles } from "@material-ui/core";
import ParallaxDivider from "./ParallaxDivider";
import performancesImg from "../img/quick.jpg";
import Instafeed from "instafeed.js";
import PhotoGrid from "./PhotoGrid";

const styles = {
  container: {
    height: "100%",
    width: "100vw",
    backgroundColor: "white",
    paddingTop: 30,
    paddingBottom: 30
  },
  link: {
    width: "100%"
  }
};

class Photos extends Component {
  state = {
    imageData: []
  };
  componentDidMount() {
    const feed = new Instafeed({
      get: "user",
      userId: "286664193",
      accessToken: "286664193.1677ed0.d46b9c3d793745748af14e333fb0c25c",
      limit: 15,
      sortBy: "most-recent",
      resolution: "standard_resolution",
      success: response => {
        this.setState({ imageData: response.data });
      }
    });
    feed.run();
  }
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <ParallaxDivider image={performancesImg} title="Style" />
        <div className={classes.container} id="about">
          <PhotoGrid imageData={this.state.imageData} />
          <div style={{ display: "none" }} id="instafeed" />
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Photos);
