import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import * as actions from "../actions";

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

  handleLogin = e => {
    e.preventDefault();
    // debugger;
    this.props.fetchProfile(this.state, this.props.history);
  };

  render() {
    console.log("%c >> Inside Login \n", "color: #bada55");
    // console.log("LOGGED IN: ", this.props.loggedIn);
    // console.log("PROPS: ", this.props);
    console.log("---------------------");

    return (
      <div>
        <form onSubmit={this.handleLogin}>
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
          <Button raised color="primary" type="submit">
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
            value={this.state.newPassword}
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

const mapStateToProps = state => {
  return {
    errors: state.errors
  };
};

export default withRouter(connect(mapStateToProps, actions)(Login));
