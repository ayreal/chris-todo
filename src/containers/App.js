import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "../components/Header";
import Main from "./Main";
import Footer from "../components/Footer";

class App extends Component {
  // componentDidMount() {
  //   if (localStorage.token) {
  //     this.props.fetchCurrentUser();
  //   }
  // }

  render() {
    console.log("%c >> Inside App \n", "color: #bada55");
    // console.log("USER ID: ", this.props.userId);
    // console.log("LOGGED IN: ", this.props.loggedIn);
    // console.log("PROPS: ", this.props);
    console.log("---------------------");

    return (
      <div className="app">
        <Header loggedIn={this.props.loggedIn} />
        <Route path="/" component={Main} />
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, actions)(App);
