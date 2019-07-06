import React from "react";
import axios from 'axios';
// import {useState} from "react";
// import { Redirect } from "react-router-dom";
// @material-ui/core components_1
import withStyles from "@material-ui/core/styles/withStyles";
// import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// import People from "@material-ui/icons/People";
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
// import LoginForm from "../SignIn/index.jsx";
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
// import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

// import image from "assets/img/bg7.jpg";
import image from "assets/img/world-map.png";
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      formData: {email: '', password: ''},
      submitted: false,
      redirect_set: false
    };
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
        axios.post('/api/user/login', formData, { headers: {'Accept': 'application/json'} })
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
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render() {
    // if (this.state.redirect_set) {
    //   return (
    //   <Redirect to="/login"/>      
    //   )
    // }
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
                {/* <LoginForm /> */}
                <Card className={classes[this.state.cardAnimaton]}>
                  {/* <form className={classes.form}> */}
                  <ValidatorForm ref="form" className={classes.form} onSubmit={this.handleSubmit}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Login</h4>
                      {/* <div className={classes.socialLine}>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-twitter"} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-facebook"} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-google-plus-g"} />
                        </Button>
                      </div> */}
                    </CardHeader>
                    <CardBody>                        
                              <TextValidator
                                label="Email..."
                                fullWidth
                                onChange={this.handleChange}
                                name="email"
                                type="email"
                                className={classes.inp_field}
                                value={formData.email}
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'email is not valid']}
                                
                                />
                                  <Email className={classes.inputIconsColor} />
                                
                                <TextValidator
                                  label="Password..."
                                  fullWidth
                                  onChange={this.handleChange}
                                  name="password"
                                  type="password"
                                  className={classes.inp_field}
                                  value={formData.password}
                                  validators={['required']}
                                  errorMessages={['this field is required']}
                                  
                             />
                                        <Icon className={classes.inputIconsColor}>
                                          lock_outline
                                        </Icon>
                              
                        {/* <TextField
                                id="standard-with-placeholder"
                                label="With placeholder"
                                placeholder="Placeholder"
                                className={classes.textField}
                                margin="normal"
                              /> */}
               
                      {/* <CustomInput
                        labelText="Email..."
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                        fomrData={formData}
                        onChange={this.handleChange}                         
                      />
                      <CustomInput
                        labelText="Password"
                        id="password"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          )                          
                        }}
                        formData={formData}
                        onChange={this.handleChange} 
                                                 
                      /> */}

                       {/* <input
                          value={formData.email}
                          onChange={this.handleChange}
                          placeholder="Email..."
                          type="email"
                          name="email"
                          required
                        />
                        <input
                          value={formData.password}
                          onChange={this.handleChange}
                          placeholder="Password"
                          type="password"
                          name="password"
                          required
                        /> */}
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button  simple color="primary" size="lg" className={classes.btnSignin} type="submit" disabled={submitted}>
                        Sign In
                      </Button>
                        <Button href="/register" simple color="primary" size="sm" className={classes.btnSignup}>
                          Sign up
                        </Button>
                        <Button href="/forgot" simple color="primary" size="sm" className={classes.btnForgot}>
                          forgot password
                      </Button>
                    </CardFooter>
                  {/* </form> */}
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
