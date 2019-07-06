import React from "react";
import PropTypes from "prop-types";
// import {Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from "@material-ui/core";
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import CloseIcon from '@material-ui/icons/Close';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader} from 'mdbreact';
import {  MDBRow, MDBCol} from "mdbreact";

const Modal = ({ description, onCloseModal, openModal, title }) => (
  // <Dialog
  //   // fullScreen
  //   open={openModal}
  //   onClose={onCloseModal}
  //   aria-labelledby="alert-dialog-title"
  //   aria-describedby="alert-dialog-description"
  //   style={{ width: '800px', height:'400px' }}
  // >
  //   <DialogTitle style={{ width: '800px' }} id="alert-dialog-title">{title}
  //       <AppBar >
  //         <Toolbar>
  //           <IconButton edge="start" color="inherit" onClick={onCloseModal} aria-label="Close">
  //             <CloseIcon />
  //           </IconButton>
  //           <Typography variant="h6" >
  //             Sound
  //           </Typography>
  //           {/* <Button color="inherit" onClick={onCloseModal}>
  //             save
  //           </Button> */}
  //         </Toolbar>
  //       </AppBar>
  //   </DialogTitle>
  //   <DialogContent>
  //     <DialogContentText id="alert-dialog-description">
  //       {/* {description} */}
  //       Here is your Description
  //     </DialogContentText>
  //   </DialogContent>
  //   <DialogActions>
  //     <Button onClick={onCloseModal} color="primary">
  //       Add
  //     </Button>
  //   </DialogActions>
  // </Dialog>

  <MDBContainer>
      <MDBModal isOpen={openModal} toggle={onCloseModal}>
        <MDBModalHeader toggle={onCloseModal}>{title}</MDBModalHeader>
        <MDBModalBody>
          {/* {description} */}
          <MDBRow>
            <MDBCol md="4" sm="12" xs="12" className="buy_credit">
              <br/>
              <div>
                <i className="material-icons star">grade</i>
              </div>
              <h4>50 Credit</h4>
              <h6>R50</h6>
              <br/>
              <MDBBtn href="/dashboard"  size="md" gradient="aqua">Pay Pal</MDBBtn>
              <MDBBtn href="/dashboard"  size="md" gradient="blue">PayLoad</MDBBtn>
            </MDBCol>
            <MDBCol md="4" sm="12" xs="12" className="buy_credit">
                <br/>
                <div>
                  <i className="material-icons star">grade</i>
                  <i className="material-icons star">grade</i>
                </div>
                <h4>100 Credit</h4>
                <h6>R100</h6>
                <br/>
                <MDBBtn href="/dashboard"  size="md" gradient="aqua">Pay Pal</MDBBtn>
                <MDBBtn href="/dashboard"  size="md" gradient="blue">PayLoad</MDBBtn>
            </MDBCol>
            <MDBCol md="4" sm="12" xs="12" className="buy_credit">
              <br/>
              <div>
                  <i className="material-icons star">grade</i>
                  <i className="material-icons star">grade</i>
                  <i className="material-icons star">grade</i>
              </div>
              <h4>150 Credit</h4>
              <h6>R150</h6>
              <br/>
              <MDBBtn href="/dashboard"  size="md"  gradient="aqua">Pay Pal</MDBBtn>
              <MDBBtn href="/dashboard"  size="md"  gradient="blue">PayLoad</MDBBtn>
            </MDBCol>
          </MDBRow>

        </MDBModalBody>
        {/* <MDBModalFooter>
          <MDBBtn color="secondary" onClick={onCloseModal}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter> */}
      </MDBModal>
    </MDBContainer>
);

Modal.propTypes = {
  description: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default Modal;
