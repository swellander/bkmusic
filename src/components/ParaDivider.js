import React from 'react';
import { withStyles } from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';
import gigListImg from '../components/smile.jpg';

const styles = {
  container: {
    // marginLeft: -40,
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100vh',
  },
  image: {
    width: '100vw',
    height: '150vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${gigListImg})`
  },
  children: {
    // position: 'absolute',
    // // height: '100vh',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  title: {
    color: 'white',
    letterSpacing: 11,
  }
}

const HeroBanner = ({ classes, image, min, max, children }) => (
  <div className={classes.container}>
    <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate style>
      <div
        className={classes.image}
      // style={{ backgroundImage: `url(${image})` }}
      />
    </Parallax>
    <div className={classes.children}>{children}</div>
  </div>
);

export default withStyles(styles)(HeroBanner);