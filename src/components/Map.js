import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  map: {
    height: "100%"
  }
};

class Map extends Component {
  initMap = () => {
    const { center } = this.props;
    console.log(center);
    try {
      new window.google.maps.Map(document.getElementById("map"), {
        center,
        zoom: 14
      });
      console.log("Mounted");
    } catch (ex) {
      console.log("UGGGG");
      console.error(ex);
    }
  };
  componentDidMount() {
    // this.initMap();
  }
  componentDidUpdate(prev) {
    if (prev.center !== this.props.center) this.initMap();
  }
  render() {
    const { classes } = this.props;
    return <div className={classes.map} id="map" />;
  }
}

export default withStyles(styles)(Map);
