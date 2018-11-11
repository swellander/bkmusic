import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { MusicNote } from '@material-ui/icons';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    const { center, zoom } = this.props;
    const { lat, lng } = center;
    console.log(this.props)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: 400, width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.MAP_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <MusicNote
            fontSize="large"
            lat={lat}
            lng={lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;