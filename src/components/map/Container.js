import React from "react";
import { GoogleApiWrapper } from "google-maps-react";
import Map from "./Map";

class Container extends React.Component {
  render() {
    // if (!this.props.loaded) {
    //   return <div>Loading...</div>;
    // }
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <Map google={this.props.google} />
      </div>
      // <div
      //   style={{
      //     height: "100%",
      //     width: "100%",
      //     border: "1px solid black"
      //   }}
      // />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBsDMNnWVRHApwvxPOvdJbGysCh0atR6BM"
})(Container);
