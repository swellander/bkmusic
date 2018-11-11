import React, { Fragment } from "react"
import Gig from './Gig'
import { withStyles, Grid, } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { Link } from 'gatsby'


const styles = {
  container: {
    height: '100vh'
  },
  link: {
    width: '100%',
  }
}

const Giglist = ({ classes, edges }) => {
  return (
    <div className={classes.container}>
      <h3>Tour Dates</h3>
      < Grid container justify="center" >
        <Grid item lg={9} xs={11} justify="center" container>
          {edges.map((edge, i) => {
            const { frontmatter } = edge.node;
            return (
              <Fragment key={frontmatter.id}>
                <Gig key={frontmatter.id} gig={frontmatter} />
                <Divider key={frontmatter.id} />
              </Fragment>
            )
          })}
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Giglist);