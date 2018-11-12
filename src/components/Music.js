import React, { Fragment } from "react"
import Gig from './Gig'
import { Typography, withStyles, Grid, } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';


const styles = {
  container: {
    height: '100vh',
    backgroundColor: 'white',
  },
  link: {
    width: '100%',
  }
}

const Giglist = ({ classes, edges }) => {
  return (
    <Grid container justify="center" alignItems="center" className={classes.container}>

      <Typography variant="display3">Music</Typography>
    </Grid>
  )
}

export default withStyles(styles)(Giglist);