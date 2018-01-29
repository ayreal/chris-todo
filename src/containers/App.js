import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "../components/Header";
import Main from "./Main";
import Footer from "../components/Footer";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    console.log("%c >> Inside App \n", "color: #bada55");
    console.log("USER ID: ", this.props.currentUser.id);
    console.log("LOGGED IN: ", this.props.loggedIn);
    // console.log("PROPS: ", this.props);
    console.log("---------------------");

    return (
      <div className="app">
        <Header />
        <Route path="/" component={Main} loggedIn={this.props.loggedIn} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser.id,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, actions)(App);
// export default App;
