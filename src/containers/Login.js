import React, { Component } from "react";
import { connect } from "react-redux";
import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
// import * as actions from "../actions";

class Login extends Component {
  state = {
    name: "",
    password: "",
    newName: "",
    newPassword: "",
    passwordConf: ""
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    console.log("%c >> Inside Login \n", "color: #bada55");
    console.log("STATE: ", this.state);
    // console.log("LOGGED IN: ", this.props.loggedIn);
    // console.log("PROPS: ", this.props);
    console.log("---------------------");

    return (
      <div>
        <form>
          <TextField
            id="name"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange("name")}
          />
          <br />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange("password")}
          />
          <br />
          <Button raised color="primary">
            Login
          </Button>
        </form>

        <form>
          <TextField
            id="newName"
            label="Name"
            value={this.state.newName}
            onChange={this.handleChange("newName")}
          />
          <br />
          <TextField
            id="newPassword"
            label="Password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange("newPassword")}
          />
          <br />
          <TextField
            id="passwordConf"
            label="Confirm Password"
            type="password"
            value={this.state.passwordConf}
            onChange={this.handleChange("passwordConf")}
          />
          <br />
          <Button raised color="primary">
            Signup
          </Button>
        </form>
      </div>
    );
  }
}

// export default connect(null, actions)(Login);
export default Login;
