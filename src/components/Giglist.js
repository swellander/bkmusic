import React, { Fragment } from "react";
import Gig from "./Gig";
import { withStyles, Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ParallaxDivider from "./ParallaxDivider";
import performancesImg from "../img/smile.jpg";

const styles = {
  container: {
    height: "100%",
    backgroundColor: "white",
    paddingTop: 30
  },
  link: {
    width: "100%"
  }
};

const Giglist = ({ classes, edges }) => {
  // console.log(edges);
  // edges = edges.filter(gig => new Date(gig.date) > Date.now());
  // edges.sort((a, b) => new Date(a.date) - new Date(b.date));
  // console.log(edges);
  return (
    <Fragment>
      <ParallaxDivider image={performancesImg} title="Performances" />
      <div className={classes.container} id="performances">
        <Grid container justify="center">
          <Grid item lg={9} xs={11} justify="center" container>
            {edges.map((edge, i) => {
              const { frontmatter } = edge.node;
              return (
                <Fragment key={i}>
                  <Gig key={frontmatter.id} gig={frontmatter} />
                  <Divider />
                </Fragment>
              );
            })}
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(Giglist);
