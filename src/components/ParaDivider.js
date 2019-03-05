import React from "react";
import { withStyles } from "@material-ui/core";
import { Parallax } from "react-scroll-parallax";
import gigListImg from "../components/smile.jpg";
import { isMobileDevice } from "../util";

const styles = {
  container: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "100vh"
  },
  image: {
    width: "100vw",
    height: "150vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${gigListImg})`
  },
  title: {
    color: "white",
    letterSpacing: 11
  }
};

console.log("is on mobile:", isMobileDevice());
const HeroBanner = ({ classes, image, min, max, children }) => (
  <div className={classes.container}>
    <Parallax
      disabled={isMobileDevice()}
      offsetYMin={min}
      offsetYMax={max}
      slowerScrollRate
      style
    >
      <div className={classes.image} />
    </Parallax>
    <div>{children}</div>
  </div>
);

export default withStyles(styles)(HeroBanner);
