import React from "react";
import PropTypes from "prop-types";
import {Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

const Modal = ({ description, onCloseModal, openModal, title }) => (
  <Dialog
    // fullScreen
    open={openModal}
    onClose={onCloseModal}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    style={{ width: '800px', height:'400px' }}
  >
    <DialogTitle style={{ width: '800px' }} id="alert-dialog-title">{title}
        <AppBar >
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={onCloseModal} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" >
              Sound
            </Typography>
            {/* <Button color="inherit" onClick={onCloseModal}>
              save
            </Button> */}
          </Toolbar>
        </AppBar>
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {/* {description} */}
        Here is your Description
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onCloseModal} color="primary">
        Add
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
