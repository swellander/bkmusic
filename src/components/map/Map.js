import React from "react";
import ReactDOM from "react-dom";

export default class Map extends React.Component {
  componentDidMount() {
    this.loadMap();
  }
  componentDidUpdate(prev) {
    if (prev.google !== this.props.google) this.loadMap();
  }
  loadMap = () => {
    if (this.props && this.props.google) {
      const { google } = this.props;
      const { maps } = google;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 14;
      let lat = 37.774929;
      let lng = -122.419416;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom
        }
      );
      this.map = new maps.Map(node, mapConfig);
    }
  };
  render() {
    return (
      <div style={{ height: 300, width: 300 }} ref="map">
        Loading map...
      </div>
    );
  }
}
