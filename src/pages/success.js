import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "gatsby";
import { withStyles, Typography, Grid, Button } from "@material-ui/core";

const styles = {
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
  },
  successContainer: {
    flex: 1
  },
  success: {
    textAlign: "center"
  },
  message: {
    paddingBottom: 40
  }
};

const SuccessPage = ({ classes }) => (
  <div className={classes.wrapper}>
    <Header splash={false} />
    <Grid
      className={classes.successContainer}
      container
      justify="center"
      alignItems="center"
    >
      <div className={classes.success}>
        <Typography className={classes.message} variant="display1">
          Your message was sent!
        </Typography>
        <div>
          <Button component={Link} to="/" variant="outlined">
            Back
          </Button>
        </div>
      </div>
    </Grid>
    <Footer />
  </div>
);

export default withStyles(styles)(SuccessPage);
