import React from "react";
import { Parallax } from "react-scroll-parallax";
import { withStyles, Typography } from "@material-ui/core";
import smileImg from "./smile.jpg";
import { isMobileDevice } from "../util";

const styles = {
  container: {
    position: "relative",
    // marginLeft: -40,
    width: "100%",
    height: "100vh",
    overflow: "hidden"
  },
  image: {
    width: "100vw",
    height: "150vh", // this should be dynamic, right now it's fixed based on a min max offset
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${smileImg})`
  },
  titleContainer: {
    position: "absolute",
    // height: '100vh',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "white",
    letterSpacing: 11
  }
};

const MusicPara = ({ classes }) => (
  <div className={classes.container}>
    <Parallax
      disabled={isMobileDevice()}
      style={{ margin: 0 }}
      expanded
      offsetYMax={150}
      offsetYMin={-150}
      slowerScrollRate
      tag="figure"
    >
      <div className={classes.image} />
    </Parallax>
    <div className={classes.titleContainer}>
      <Typography variant="h4" className={classes.title}>
        PERFORMANCES
      </Typography>
    </div>
  </div>
);

export default withStyles(styles)(MusicPara);
