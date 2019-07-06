import React,{Component} from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import withStyles from "@material-ui/core/styles/withStyles";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
// import InputAdornment from "@material-ui/core/InputAdornment";
// import Icon from "@material-ui/core/Icon";
// import CustomInput from "components_1/CustomInput/CustomInput.jsx";
import { ValidatorForm,TextValidator} from 'react-material-ui-form-validator';
import Icon from "@material-ui/core/Icon";
// import People from "@material-ui/icons/People";
import Person from "@material-ui/icons/Person";
import Email from "@material-ui/icons/Email";
import dialogStyle from "./DialogStyle.jsx";

class Modal extends Component {
  state = {
    submitted: false,
    formData:{IMEI:'', CellNumber: '', DeviceOwner: "",CellPhoneOwner:"", Address1:"",Address2:'' }  
  };
  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
    // console.log(formData)
  }
  
  handleSubmit = () => {
    this.setState({ submitted: true }, () => {
      const { formData } = this.state;      
      axios.post('/api/user/register', formData, { headers: {'Accept': 'application/json'} })
        .then((response) => {

          if(response.data.success) {
            // this.setState({ fireRedirect: true })
            this.props.history.push('/dashboard');
          }else{
            this.props.history.push('/login');
            // this.setState({redirect_set: true})
            // console.log(this.state.redirect_set)
            // return true;

          }
        });
    }
    );
 }
  
  render() {
    const { classes, description, openModal, title, btn_title , onCloseModal,data}=this.props;
    return (
      <MDBContainer>
        <MDBModal isOpen={openModal} toggle={onCloseModal} >
          <MDBModalHeader toggle={onCloseModal}>{title}</MDBModalHeader>
          <MDBModalBody>
          <ValidatorForm  className="form" onSubmit={this.handleSubmit} >
            {description.map((item,key) => {          
                if( item === 'IMEI' ){
                    return(                
                    <div key={key}>
                      <TextValidator
                                    key={key}
                                    label={item}
                                    fullWidth
                                    onChange={this.handleChange}
                                    name={item}
                                    type="text"
                                    className={classes.inp_field}
                                    defaultValue={data[1]}
                                    validators={['required']}
                                    errorMessages={['this field is required']}                                
                      />
                      <Email className={classes.inputIconsColor} />
                    </div>
                                  
                    )
                }else if( item === 'CellNumber' ){
                    return(
                      <div key={key}>
                        <TextValidator
                                      key={key}
                                      label={item}
                                      fullWidth
                                      onChange={this.handleChange}
                                      name={item}
                                      type="text"
                                      className={classes.inp_field}
                                      defaultValue={data[1]}
                                      validators={['required']}
                                      errorMessages={['this field is required']}                                
                        />
                        <Icon className={classes.inputIconsColor}>settings_phone</Icon>
                      </div>
                          )
                }else if(item==='Address1' || item==='Address2'){
                    return(
                      <div key={key}>
                      <TextValidator
                                    key={key}
                                    label={item}
                                    fullWidth
                                    onChange={this.handleChange}
                                    name={item}
                                    type="text"
                                    className={classes.inp_field}
                                    defaultValue={data[3]}
                                    validators={['required']}
                                    errorMessages={['this field is required']}                                
                      />
                        <Icon className={classes.inputIconsColor}>home</Icon>
                    </div>
                    )
                }else{
                    return(
                      <div key={key}>
                      <TextValidator
                                    key={key}
                                    label={item}
                                    fullWidth
                                    onChange={this.handleChange}
                                    name={item}
                                    type="text"
                                    className={classes.inp_field}
                                    defaultValue={data[2]}
                                    validators={['required']}
                                    errorMessages={['this field is required']}                                
                      />
                      <Person className={classes.inputIconsColor} />
                    </div>
                )
                }})}
              </ValidatorForm>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={onCloseModal}>Close</MDBBtn>
            <MDBBtn  color="primary" type="submit" disabled={this.state.submitted}>{btn_title}</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
      );
    }
  }
  Modal.propTypes = {
    classes: PropTypes.object.isRequired,
    description: PropTypes.arrayOf(PropTypes.node),
    onCloseModal: PropTypes.func.isRequired,
    openModal: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    btn_title: PropTypes.string.isRequired,
    data: PropTypes.array
  };
  
  export default withStyles(dialogStyle)(Modal);
