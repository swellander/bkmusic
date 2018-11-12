import React, { Fragment } from "react"
import Gig from './Gig'
import { Typography, withStyles, Grid, } from '@material-ui/core';
import ParaDivider from "./ParaDivider";
import gigListImg from './smile.jpg';

const styles = {
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  link: {
    width: '100%',
  }
}

const Giglist = ({ classes, edges }) => {
  return (
    <Fragment>
      <ParaDivider
        min={-150}
        max={150}
        image={gigListImg}
      >
        <Typography>PERFORMANCES</Typography>
      </ParaDivider>
      <div className={classes.container}>
        <h3>Tour Dates</h3>
        <Grid container justify="center" >
          <Grid item lg={7} xs={11} justify="center" container>
            {edges.map((edge, i) => {
              const { frontmatter } = edge.node;
              return (
                <Gig key={i} gig={frontmatter} />
              )
            })}
          </Grid>
        </Grid>
      </div>
    </Fragment>
  )
}

export default withStyles(styles)(Giglist);