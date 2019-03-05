import React from "react";
import { Grid, IconButton, Typography, withStyles } from "@material-ui/core";
import { SocialIcon } from "react-social-icons";
import moment from "moment";
import SocialIcons from "./SocialIcons";

const styles = {
  container: {
    height: 100,
    width: "100vw",
    backgroundColor: "#1f1f1f"
  },
  innnerContainer: {
    textAlign: "center"
  },
  icon: {
    fontSize: 5
  },
  copyRight: {
    color: "white",
    textAlign: "center",
    marginTop: -20
  }
};

const Footer = ({ classes }) => (
  <Grid
    className={classes.container}
    container
    justify="center"
    alignItems="center"
  >
    <Grid
      container
      item
      xs={12}
      justify="center"
      className={classes.innnerContainer}
    >
      <SocialIcons />
    </Grid>
    <Grid item xs={12}>
      <Typography variant="caption" className={classes.copyRight}>
        ©{moment(Date.now()).format("YYYY")} by Brandon Nelson
      </Typography>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Footer);
