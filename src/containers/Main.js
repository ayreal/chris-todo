import React, { Component } from "react";
// import { connect } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import * as actions from "../actions";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Lists from "./Lists";

class Main extends Component {
  render() {
    console.log("%c >> Inside Main \n", "color: #bada55");
    // console.log("USER ID: ", this.props.userId);
    // console.log("LOGGED IN: ", this.props.loggedIn);
    // console.log("PROPS: ", this.props);
    console.log("---------------------");

    return (
      <div className="main">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Lists} />
        </Switch>
      </div>
    );
  }
}

export default Main;
// export default connect(null, actions)(Main);
