import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";

import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
// import {  MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import {  MDBRow, MDBCol,MDBBtn} from "mdbreact";
import { devices, call_nums} from "variables/general.jsx";
import Maps from "../Maps/Maps.jsx";
import BuyDialog from "views/BuyDialog/BuyDialog.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0,
    description: "", openModal: false, title: ""
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  handleOpenModal = () => {
    this.setState({ description: "Payment Gateway", openModal: true, title: "Buy Product" });
  };
  handleCloseModal =  () => {
    this.setState({
      openModal: false
    });
  };
  toggle = () => {
    this.setState({
      openModal: !this.state.openModal
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer >
          <GridItem xs={12} sm={12} md={12}>
            <div className={classes.selUser}>

            <Card chart >              
              {/* <CardHeader color="info" stats icon >
                  <CardIcon color="info" ><Accessibility  /></CardIcon>                     
              </CardHeader> */}
              <CardBody>
              <i className="material-icons">touch_app</i>
              <h4>Admin User Setting</h4>             
                <FormControl className={classes.formControl}>
                  <NativeSelect
                    // value={state.age}
                    // onChange={handleChange('age')}
                    name="age"
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'age' }}
                  >
                    <option value="">None</option>
                    <option value={10}>1st</option>
                    <option value={20}>2nd</option>
                    <option value={30}>3rd</option>
                  </NativeSelect>
                  {/* <FormHelperText>With visually hidden label</FormHelperText> */}
                </FormControl>
              </CardBody>
            </Card>
            </div>
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>              
              <CardHeader color="info" stats icon>
                  <CardIcon color="info"><Accessibility /></CardIcon>                     
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>User Information</h4>
                
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="6">Fullname:</MDBCol>
                    <MDBCol md="6" sm="6" xs="6">panda</MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="6">CallNumber:</MDBCol>
                    <MDBCol md="6" sm="6" xs="6">1953209514</MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="6">Email:</MDBCol>
                    <MDBCol md="6" sm="6" xs="6">panda@gmail.com</MDBCol>
                  </MDBRow>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>

          
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger"><Icon>info_outline</Icon></CardIcon>                        
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Credit Information</h4>
                
                  <MDBRow>
                    <MDBCol md="8" sm="8" xs="8">
                      <MDBRow>
                          <MDBCol md="6" sm="6" xs="6">mo Byte:</MDBCol>
                          <MDBCol md="6" sm="6" xs="6">128</MDBCol>
                      </MDBRow>
                      <MDBRow>
                          <MDBCol md="6" sm="6" xs="6">mt Byte:</MDBCol>
                          <MDBCol md="6" sm="6" xs="6">64</MDBCol>
                      </MDBRow>
                    </MDBCol>
                    <MDBCol md="4" sm="4" xs="4">                      
                      <MDBRow>
                        <MDBBtn tag="a" size="md"  gradient="aqua">
                          {/* <MDBIcon icon="bolt" size="md"/>&nbsp;&nbsp; */}
                          Reset
                        </MDBBtn>
                      </MDBRow>                     
                    </MDBCol>
                  </MDBRow>
                  
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success" stats icon>
                <CardIcon color="success"><Store /></CardIcon></CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>SMS Information</h4>
                <p className={classes.cardCategory}>
                  SMS OUT
                </p>
                <MDBRow>
                  <MDBCol md="8" sm="8" xs="8">Available Credit:90</MDBCol>
                  <MDBCol md="4" sm="4" xs="4"> <MDBBtn tag="a" size="sm" gradient="blue" onClick={this.handleOpenModal}>B&nbsp;u&nbsp;y</MDBBtn></MDBCol>
                  <BuyDialog {...this.state} onCloseModal={this.handleCloseModal} />
                  
                </MDBRow>

                {/* <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>Buy Modal</MDBModalHeader>
                    <MDBModalBody>
                      (...)
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                      <MDBBtn color="primary">Save changes</MDBBtn>
                    </MDBModalFooter>
                  </MDBModal>
                 */}
                <MDBRow>
                  <MDBCol md="8" sm="8" xs="8">Used Credit:100</MDBCol>
                  <MDBCol md="4" sm="4" xs="4"> <MDBBtn tag="a" size="sm" gradient="blue">Reset</MDBBtn></MDBCol>
                </MDBRow>
                <p className={classes.cardCategory}>
                  SMS IN
                </p>                
                <MDBRow>
                  <MDBCol md="8" sm="8" xs="8">Used Credit:100</MDBCol>
                  <MDBCol md="4" sm="4" xs="4"> <MDBBtn tag="a" size="sm" gradient="blue">Reset</MDBBtn></MDBCol>
                </MDBRow>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
              title="Tasks:"
              headerColor="primary"
              tabs={[
                {
                  tabName: "Device list",
                  tabIcon: BugReport,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0, 3]}
                      tasksIndexes={[0, 1, 2, 3]}
                      tasks={devices}
                      taskHead={["ID","IMEI","Name","Address","mo Byte","mt Byte","Action"]}
                      modalItem={["IMEI","Friendly Device/Owner","Address"]}
                      modalTitle="Device"
                    />
                  )
                }
              ]}
            />
          </GridItem>  
          <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
              title="Tasks:"
              headerColor="primary"
              tabs={[                
                {
                  tabName: "Call Numberlist",
                  tabIcon: Code,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1,2,3]}
                      tasks={call_nums}
                      taskHead={["ID", "Call Number", "SMS OUT", "SMS IN","Name","Action"]}
                      modalItem={["Cell Number","Friendly CellNumber/Owner","Address"]}
                      modalTitle="CellNumber"
                    />
                  )
                }
              ]}
            />
          </GridItem>    
        </GridContainer>       
        <Maps/>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
