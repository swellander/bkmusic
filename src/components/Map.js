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
    new window.google.maps.Map(document.getElementById("map"), {
      center,
      zoom: 14
    });
  };
  componentDidMount() {
    // this.initMap();
  }
  componentDidUpdate(prev) {
    console.log("updating");
    if (prev.center !== this.props.center) this.initMap();
  }
  render() {
    const { classes } = this.props;
    return <div className={classes.map} id="map" />;
  }
}

export default withStyles(styles)(Map);
