import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { withStyles } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";

const styles = {
  map: {
    width: 600,
    height: 400
  }
};

export class MapContainer extends Component {
  render() {
    const { classes, width } = this.props;
    console.log("Props", this.props);

    let mapWidth;
    let mapHeight;

    console.log("width", width);
    switch (width) {
      case "lg":
        mapWidth = 600;
        mapHeight = 400;
        break;
      case "xs":
        mapWidth = 200;
        mapHeight = 133;
        break;
      default:
        mapWidth = 600;
        mapHeight = 400;
    }

    console.log(mapWidth, mapHeight);

    return (
      <Map
        style={{ width: mapWidth, height: mapHeight }}
        google={this.props.google}
        zoom={14}
        center={this.props.center}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Current location"}
          position={this.props.center}
        />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>yo</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBQbdqu0nFdFsqJPS0czvCovV5JnuwsCy4"
})(withWidth()(MapContainer));
