import React from 'react';
import { SwipeableDrawer, List, ListItem, ListItemText, IconButton, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  menuList: {
    backgroundColor: 'black'
  }
}

class Menu extends React.Component {
  state = {
    open: false
  }
  toggleDrawer = open => {
    console.log('toggling menu')
    this.setState({ open })
  }
  render() {
    const { classes } = this.props;
    const sideMenu = (
      <List >
        <ListItem button>
          <ListItemText primary="Music" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Performances" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    )
    return (
      <div>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={() => this.toggleDrawer(true)}>
          <MenuIcon fontSize="large" />
        </IconButton>
        <SwipeableDrawer
          anchor="right"
          open={this.state.open}
          onClose={() => this.toggleDrawer(false)}
          onOpen={() => this.toggleDrawer(true)}
        >
          {sideMenu}
        </SwipeableDrawer>
      </div >
    );
  }
}

export default withStyles(styles)(Menu);