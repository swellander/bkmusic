import React from "react"
import { Toolbar, IconButton, AppBar, Typography, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  bar: {
    background: 'transparent',
    boxShadow: 'none',
    color: 'black'
  },
};

const Header = ({ classes }) => (
  <div>
    <AppBar className={classes.bar} position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          BRANDON NELSON
        </Typography>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
)

export default withStyles(styles)(Header);

