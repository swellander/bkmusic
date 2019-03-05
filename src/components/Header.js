import React from "react";
import { Toolbar, AppBar, Typography, withStyles } from "@material-ui/core";
import { Link } from "gatsby";
import Menu from "./Menu";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    // marginLeft: -12,
    float: "right"
    // marginRight: 20
  },
  bar: {
    background: "transparent",
    boxShadow: "none",
    color: "black"
  },
  title: {
    flexGrow: 1,
    fontSize: 20,
    letterSpacing: 4,
    textDecoration: "none"
  },
  transparent: {
    opacity: 0,
    flexGrow: 1,
    fontSize: 20,
    letterSpacing: 4
  },
  white: {
    position: "absolute",
    background: "transparent",
    boxShadow: "none",
    color: "white"
  }
};

const Header = ({ classes, splash }) => (
  <div>
    <AppBar className={splash ? classes.white : classes.bar} position="static">
      <Toolbar>
        <Typography
          to="/"
          component={Link}
          color="inherit"
          className={splash ? classes.transparent : classes.title}
        >
          BRANDON NELSON
        </Typography>
        <Menu />
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(Header);
