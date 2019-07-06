import React from "react";
import PropTypes from "prop-types";
import {Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import CloseIcon from '@material-ui/icons/Close';

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

const Modal = ({ description, onCloseModal, openModal, title }) => (
  <Dialog
        open={openModal}
        onClose={onCloseModal}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Subscribe
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={onCloseModal} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
);

Modal.propTypes = {
  description: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default Modal;
