import React, { Component } from "react";
import { connect } from "react-redux";
// import * as actions from "../actions";

class Login extends Component {
  render() {
    console.log("%c >> Inside Login \n", "color: #bada55");
    // console.log("USER ID: ", this.props.userId);
    // console.log("LOGGED IN: ", this.props.loggedIn);
    // console.log("PROPS: ", this.props);
    console.log("---------------------");

    return <div className="login">This is the login page</div>;
  }
}

// export default connect(null, actions)(Login);
export default Login;
