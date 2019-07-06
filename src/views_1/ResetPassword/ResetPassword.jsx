import React from "react";
import axios from 'axios';

// @material-ui/core components_1
import withStyles from "@material-ui/core/styles/withStyles";
// import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
// import Email from "@material-ui/icons/Email";
import Icon from "@material-ui/core/Icon";
// core components_1
import Header from "components_1/Header/Header.jsx";
import HeaderLinks from "components_1/Header/HeaderLinks.jsx";
import Footer from "components_1/Footer/Footer.jsx";
import GridContainer from "components_1/Grid/GridContainer.jsx";
import GridItem from "components_1/Grid/GridItem.jsx";
import Button from "components_1/CustomButtons/Button.jsx";
import Card from "components_1/Card/Card.jsx";
import CardBody from "components_1/Card/CardBody.jsx";
import CardHeader from "components_1/Card/CardHeader.jsx";
import CardFooter from "components_1/Card/CardFooter.jsx";
// import CustomInput from "components_1/CustomInput/CustomInput.jsx";
import { ValidatorForm,TextValidator} from 'react-material-ui-form-validator';

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

// import image from "assets/img/bg7.jpg";
import image from "assets/img/world-map.png";
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      formData: {UniqueCode:'', Password: '',ConfirmPassword:''},
      submitted: false,
      redirect_set: false
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      const { formData } = this.state;   
      if (value !== formData.Password) {
          return false;
      }
      return true;
  });
  }
  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

handleSubmit = () => {
    this.setState({ submitted: true }, () => {
      const { formData } = this.state;
      // console.log(formData)
      // setTimeout(() => this.setState({ submitted: false }), 3000);
      axios.post('/api/user/resetPassword', formData, { headers: {'Accept': 'application/json'} })
        .then((response) => {

          if(response.data.success) {
            // this.setState({ fireRedirect: true })
            this.props.history.push('/login');
          }else{
            this.props.history.push('/forgot');
            // this.setState({redirect_set: true})
            // console.log(this.state.redirect_set)
            // return true;

          }
        });
    }
    );
 }
  render() {
    const { classes, ...rest } = this.props;
    const { formData,submitted } = this.state;

    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="React App"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={5}>
                <Card className={classes[this.state.cardAnimaton]}>
                  {/* <form className={classes.form}> */}
                  <ValidatorForm ref="form" className={classes.form} onSubmit={this.handleSubmit}>
                    <CardHeader color="success" className={classes.cardHeader}>
                      <h4>Reset Password</h4>                      
                    </CardHeader>
                    <CardBody>                     
                    <TextValidator
                                label="Unique Code..."
                                fullWidth
                                onChange={this.handleChange}
                                name="UniqueCode"
                                type="text"
                                className={classes.inp_field}
                                value={formData.UniqueCode}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                
                                />
                              <Icon className={classes.inputIconsColor}>settings_phone</Icon>
                                <TextValidator
                                  label="Password..."
                                  fullWidth
                                  onChange={this.handleChange}
                                  name="Password"
                                  type="password"
                                  className={classes.inp_field}
                                  value={formData.Password}
                                  validators={['required']}
                                  errorMessages={['this field is required']}
                                  
                             />
                              <Icon className={classes.inputIconsColor}>lock_outline</Icon>
                   
                              <TextValidator
                                  label="Confirm Password..."
                                  fullWidth
                                  onChange={this.handleChange}
                                  name="ConfirmPassword"
                                  type="password"
                                  className={classes.inp_field}
                                  value={formData.ConfirmPassword}
                                  validators={['isPasswordMatch', 'required']}
                                  errorMessages={['password mismatch, confirm again!', 'this field is required']}
                                  
                             />
                              <Icon className={classes.inputIconsColor}>lock_outline</Icon>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="sm" className={classes.btnUpdate} type="submit" disabled={submitted}>
                        Update New Password
                      </Button>                       
                    </CardFooter>
                    </ValidatorForm>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
