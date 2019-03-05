import React, { Fragment } from "react";
import { IconButton, withStyles } from "@material-ui/core";
import { SocialIcon } from "react-social-icons";

const styles = {
  icon: {
    border: "1px solid white",
    borderRadius: 100
  }
};

const SocialIcons = ({ classes }) => (
  <Fragment>
    <IconButton>
      <SocialIcon
        style={{ height: 30, width: 30 }}
        url="https://www.facebook.com/Brandon.Loves.Pie"
        className={classes.icon}
        fgColor="white"
        bgColor="transparent"
      />
    </IconButton>
    <IconButton>
      <SocialIcon
        style={{ height: 30, width: 30 }}
        url="https://soundcloud.com/brandon-nelson-75"
        className={classes.icon}
        bgColor="transparent"
        fgColor="white"
      />
    </IconButton>
    <IconButton>
      <SocialIcon
        style={{ height: 30, width: 30 }}
        url="https://www.instagram.com/brandonnelsonmusic/"
        className={classes.icon}
        bgColor="transparent"
        fgColor="white"
      />
    </IconButton>
  </Fragment>
);

export default withStyles(styles)(SocialIcons);
