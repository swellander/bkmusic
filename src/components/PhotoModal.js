import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const styles = () => ({
  paper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    maxHeight: "80vh",
    maxWidth: "90vw",
    margin: "auto",
    borderRadius: 7
  }
});

class SimpleModal extends React.Component {
  state = {
    open: this.props.open
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { imgURL, classes, handleClose, open } = this.props;

    return (
      <Modal
        disableAutoFocus
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <img className={classes.paper} src={imgURL} />
      </Modal>
    );
  }
}

// We need an intermediary variable for handling the recursive nesting.
const Photo = withStyles(styles)(SimpleModal);

export default Photo;
