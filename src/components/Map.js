import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  map: {
    height: 400
  }
};

class Map extends Component {
  initMap = () => {
    const { center } = this.props;
    console.log("center", center);
    new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 40, lng: 10 },
      zoom: 5
    });
  };
  componentDidMount() {
    this.initMap();
  }
  render() {
    const { classes } = this.props;
    return <div className={classes.map} id="map" />;
  }
}

export default withStyles(styles)(Map);
