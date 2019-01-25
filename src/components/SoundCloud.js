import React from "react";
import { Grid } from "@material-ui/core";

const SoundCloud = () => (
  <Grid container justify="center">
    <Grid item xs={10} lg={7}>
      <iframe
        title="sound_cloud"
        width="100%"
        height="600"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/214071001&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      />
    </Grid>
  </Grid>
);

export default SoundCloud;
