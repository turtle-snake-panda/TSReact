import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.jsx";
import RTL from "layouts/RTL.jsx";
// import SignIn from "views_1/SignIn/index.jsx";
import LandingPage from "views_1/LandingPage/LandingPage.jsx";
import LoginPage from "views_1/LoginPage/LoginPage.jsx";
import ResetPassword from "views_1/ResetPassword/ResetPassword.jsx";
import ForgotPassword from "views_1/ForgotPassword/ForgotPassword.jsx";
import Register from "views_1/Register/Register.jsx";
import "assets/css/material-dashboard-react.css?v=1.6.0";
import "assets/scss/material-kit-react.scss?v=1.4.0";
import "assets/css/style.css";
// import "assets/jss/maps.active.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Redirect from="/dashboard" to="/admin/dashboard" />
      <Route path="/login" component={LoginPage} />
      {/* <Route path="/login" component={SignIn} /> */}
      <Route path="/forgot" component={ForgotPassword} />
      <Route path="/reset" component={ResetPassword} />
      <Route path="/register" component={Register} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
