import { container } from "assets/jss/material-kit-react.jsx";

const signinPageStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    paddingTop: "20vh",
    color: "#FFFFFF"
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      // color: "blue"
      color: "#FFFFFF"
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%"
    }
  },
  form: {
    margin: "0"
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px"
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px"
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center"
  },
  cardFooter: {
    marginTop: "35px",
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important"
  },
  inp_field:{
    // width: "250px"
    marginTop: "20px",
    marginRight: "20px"
  },
  // inputIconsColor: {
  //   float: "right",
  //   marginTop: "-50px"
  // },

  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
  },
  inputIconsColor: {
    color: "#495057",
    float: "right",
    marginTop: "-25px"
  },
  // inputIconsColor: {
  //   color: "#495057",
  //   float: "right",
  //   marginTop: "-25px"
  // },
  btnSignin:{
    borderRadius:"50%",
    background:"rgb(160, 231, 163)",
    width:"80px",
    margin: "0 4%"
  },
  btnSignup:{
    borderRadius:"50%",
    background:"rgb(243, 224, 174)",
    margin: "0 1%"
  },
  btnForgot:{
    borderRadius:"50%",
    background:"rgb(204, 204, 179)",
    margin: "0 1%"
  },
  btnReset:{
    borderRadius:"50%",
    background:"#fb8c00",
    margin: "0 1%"
  },
  btnUpdate:{
    borderRadius:"50%",
    background:"#66bb6a",
    margin: "0 1%"
  }
};

export default signinPageStyle;
