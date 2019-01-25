import React, { Component } from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";
import { withStyles, Grid, Typography, Divider } from "@material-ui/core";
import moment from "moment";
import Map from "../components/Map";
import Footer from "../components/Footer";
import Geocode from "react-geocode";

const styles = {
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
  },
  container: {
    marginTop: 50,
    height: "100%",
    flexGrow: 1
  },
  map: {
    // height: 200,
    width: "100%",
    marginTop: 38
  },
  footer: {}
};

class GigDetail extends Component {
  state = {
    center: {}
  };
  componentDidMount() {
    console.log("current Props:", this.props);
    console.log("geocode key:", process.env.GEO_KEY);
    Geocode.setApiKey(process.env.GEO_KEY);
    Geocode.fromAddress(
      this.props.data.markdownRemark.frontmatter.address
    ).then(
      response => {
        const center = response.results[0].geometry.location;
        console.log("inner center:", center);
        this.setState({ center });
      },
      error => {
        console.error("something went wrong", error);
      }
    );
  }
  render() {
    const { markdownRemark } = this.props.data; // data.markdownRemark holds our post data
    const { frontmatter } = markdownRemark;
    const { description, venue, title, date } = frontmatter;
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <Header />
        <Grid className={classes.container} container justify="center">
          <Grid item xs={9} container justify="space-between">
            <Grid item xs={12} lg={5}>
              <Typography variant="h4">{title}</Typography>
              <Divider />
              <Typography variant="subheading" style={{ marginTop: 10 }}>
                {moment(date).format("dddd, MMMM Do, YYYY")}
              </Typography>
              <Typography variant="subtitle2">{venue}</Typography>
              <Typography variant="caption">
                {moment(date).format("h:mm a")}
              </Typography>
              <Typography style={{ marginTop: 10 }}>{description}</Typography>
            </Grid>

            <Grid className={classes.map} item xs={12} lg={6}>
              {/* <Map test="test" center={this.state.center} /> */}
              <Map center={this.state.center} />
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        date
        path
        title
        venue
        address
        description
        link
      }
    }
  }
`;

export default withStyles(styles)(GigDetail);
