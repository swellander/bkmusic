import React, { Component } from "react";
import { Parallax } from "react-scroll-parallax";
import { withStyles, Typography } from "@material-ui/core";
import splashImg from "../img/splash.jpg";
import { isMobileDevice } from "../util";
import SocialIcons from "./SocialIcons";
import Img from "gatsby-image";
import SplashImage from "./images/SplashImage";

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden"
  },
  imageContainer: {
    backgroundColor: "#1f1f1f",
    width: "100vw",
    height: "150vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: "110%",
    paddingLeft: 50
    // height: "10" // this should be dynamic, right now it's fixed based on a min max offset
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    // backgroundImage: `url(${splashImg})`
  },
  titleContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column"
  },
  title: {
    color: "white",
    letterSpacing: 11,
    paddingBottom: 20
  }
};

class Splash extends Component {
  state = {
    loaded: false
  };
  render() {
    const { classes } = this.props;
    const { loaded } = this.state;
    return (
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
          <div className={classes.imageContainer}>
            <SplashImage imageFileName="landing.jpg" />
          </div>
        </Parallax>
        <div className={classes.titleContainer}>
          <Typography variant="h4" className={classes.title}>
            BRANDON NELSON
          </Typography>
          <div>
            <SocialIcons />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Splash);
