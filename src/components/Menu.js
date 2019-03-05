import React from "react";
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  withStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  menuButton: {
    // marginLeft: -12,
    // marginRight: 20
  },
  menuList: {
    backgroundColor: "transparent",
    boxShadow: "none",
    width: 180
  },
  text: {
    color: "white"
  }
};

class Menu extends React.Component {
  state = {
    open: false
  };
  toggleDrawer = open => {
    this.setState({ open });
  };
  render() {
    const { classes } = this.props;
    const sideMenu = (
      <List>
        <ListItem
          component="a"
          href="/#music"
          button
          onClick={() => this.toggleDrawer(false)}
        >
          <ListItemText classes={{ primary: classes.text }} primary="Music" />
        </ListItem>
        <ListItem
          button
          component="a"
          href="/#performances"
          onClick={() => this.toggleDrawer(false)}
        >
          <ListItemText
            classes={{ primary: classes.text }}
            primary="Performances"
          />
        </ListItem>
        <ListItem
          button
          component="a"
          href="/#about"
          onClick={() => this.toggleDrawer(false)}
        >
          <ListItemText classes={{ primary: classes.text }} primary="About" />
        </ListItem>
        <ListItem
          button
          component="a"
          href="/#contact"
          onClick={() => this.toggleDrawer(false)}
        >
          <ListItemText classes={{ primary: classes.text }} primary="Contact" />
        </ListItem>
      </List>
    );
    return (
      <div>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={() => this.toggleDrawer(true)}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <SwipeableDrawer
          classes={{ paper: classes.menuList }}
          anchor="right"
          open={this.state.open}
          onClose={() => this.toggleDrawer(false)}
          onOpen={() => this.toggleDrawer(true)}
        >
          {sideMenu}
        </SwipeableDrawer>
      </div>
    );
  }
}

export default withStyles(styles)(Menu);
