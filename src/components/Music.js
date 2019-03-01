import React from "react";
import { withStyles, Grid } from "@material-ui/core";
import SoundCloud from "./SoundCloud";

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "white"
  },
  titleContainer: {
    textAlign: "center"
  },
  title: {
    letterSpacing: 11
  }
};

const Music = ({ classes }) => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Grid item xs={12} className={classes.titleContainer}>
        <SoundCloud />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Music);
