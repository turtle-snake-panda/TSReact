import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableHead from '@material-ui/core/TableHead';
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Paper from '@material-ui/core/Paper';
// import Modal from 'react-awesome-modal';
// import Button from '@material-ui/core/Button';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// // import TextField from '@material-ui/core/TextField';
// // import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import CloseIcon from '@material-ui/icons/Close';
// import AddDialog from "views/AddDialog/AddDialog.jsx";
// import EditDialog from "views/EditDialog/EditDialog.jsx";
import Dialog from "components/Dialog/Dialog.jsx";
// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";

// import Card from "components_1/Card/Card.jsx";
// import CardBody from "components_1/Card/CardBody.jsx";
// import CardHeader from "components_1/Card/CardHeader.jsx";
// import CardFooter from "components_1/Card/CardFooter.jsx";
// import CustomInput from "components_1/CustomInput/CustomInput.jsx";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import Icon from "@material-ui/core/Icon";
// // @material-ui/icons
// import Email from "@material-ui/icons/Email";
// import { MDBContainer, MDBRow, MDBCol,MDBBtn, MDBIcon,MDBCard, MDBCardHeader, MDBCardBody } from "mdbreact";
// import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
// core components
import tasksStyle from "assets/jss/material-dashboard-react/components/tasksStyle.jsx";
class Tasks extends React.Component {
  state = {
    checked: this.props.checkedIndexes,
    description:[], openModal:false, title: "",btn_title:"", data:[]    
  };
  handleToggle = value => () => {
    const { checked } = this.state.checked;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({
      checked: newChecked
    });
  };

  toggle_add =  () => {
    // let modalNumber = 'modal' + nr
    this.setState({
      // [modalNumber]: !this.state[modalNumber]
      // description: ["IMEI","Friend Device","Address"],
      description: this.props.modalItem,
      openModal : !this.state.openModal,
      title : 'Add '+ this.props.modalTitle,
      btn_title: "Add"
    });
  };
  toggle_edit =  (item) => {
    this.setState({      
      description: this.props.modalItem,
      openModal : !this.state.openModal,
      title : "Edit "+this.props.modalTitle,
      btn_title: "Edit",
      data: item
    });
    // console.log(data)
  };
  toggle_del =  (item) => {
    // let modalNumber = 'modal' + nr
    this.setState({
      // [modalNumber]: !this.state[modalNumber]
      // description: ["IMEI","Friend Device","Address"],
      // description: {content},
      description: this.props.modalItem,
      openModal : !this.state.openModal,
      title : "Delete "+this.props.modalTitle,
      btn_title : "Delete",
      data:item
    });
  };
  

  // openModal =  () => {
  //   this.setState({
  //     openModal: true
  //   });
  // };
  // handleOpenModal = ({ description, title }) => {
  //   this.setState({ description, openModal: true, title });
  // };
  handleCloseModal =  () => {
    this.setState({
      openModal: false,
      data:[]
    });
  };
  render() {
    const { classes,  tasks, taskHead,rtlActive } = this.props;
    const tableCellClasses = classnames(classes.tableCell, {
      [classes.tableCellRTL]: rtlActive
    })
    return (      
      <Paper>
      <Fab color="primary" aria-label="Add" className={classes.fab} size="small" onClick={this.toggle_add}>
        <AddIcon/>
      </Fab>     
      <Dialog {...this.state} onCloseModal={this.handleCloseModal} />      
      {/* <Dialog {...this.state} />       */}
      <div className="table-responsive">
      <Table className={classes.table}>
      <TableHead className={classes.tableHead}>
          <TableRow className={classes.tableRow}>
            {taskHead.map(value=>(                 
              <TableCell key={value}>{value}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {tasksIndexes.map(value => ( */}
            {tasks.map( (item, key) => (
            <TableRow key={key} className={classes.tableRow}>
              {item.map(value=>(
                <TableCell className={tableCellClasses} align="left" key={value}>
                  {value}
                </TableCell>
              ))}
              <TableCell className={classes.tableActions} align="left">
                <Tooltip
                  id="tooltip-top"
                  title="Edit Task"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <IconButton
                    aria-label="Edit"
                    className={classes.tableActionButton}
                    // onClick={this.toggle_edit(item)}
                    onClick={() => this.toggle_edit(item)}
                  >
                    <Edit
                      className={
                        classes.tableActionButtonIcon + " " + classes.edit
                      }
                    />
                  </IconButton>
                </Tooltip>
                {/* <MDBContainer>
                <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)}>
                  <MDBModalHeader toggle={this.toggle(2)}>Edit Device</MDBModalHeader>
                  <MDBModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                  </MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={this.toggle(2)}>Close</MDBBtn>
                    <MDBBtn color="primary">Save changes</MDBBtn>
                  </MDBModalFooter>
                </MDBModal>
                </MDBContainer>
                 */}

                <Tooltip
                  id="tooltip-top-start"
                  title="Delete"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <IconButton
                    aria-label="Close"
                    className={classes.tableActionButton}
                    onClick={() => this.toggle_del(item)}
                  >
                    <Close
                      className={
                        classes.tableActionButtonIcon + " " + classes.close
                      }
                    />
                  </IconButton>
                </Tooltip>                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
      </Paper>
    );
  }
}

Tasks.propTypes = {
  classes: PropTypes.object.isRequired,
  tasksIndexes: PropTypes.arrayOf(PropTypes.number),
  tasks: PropTypes.arrayOf(PropTypes.node),
  taskHead:PropTypes.arrayOf(PropTypes.node),
  modalItem:PropTypes.arrayOf(PropTypes.node),
  modalTitle:PropTypes.string.isRequired,  
  rtlActive: PropTypes.bool,
};

export default withStyles(tasksStyle)(Tasks);
