import React, { Component } from "react";
import { connect } from "react-redux";
import withAuth from "../hocs/withAuth";
import * as actions from "../actions";
import Button from "material-ui/Button";

// import * as actions from "../actions";

class Lists extends Component {
  handleLogout = () => {
    this.props.logoutUser();
  };

  render() {
    console.log("%c >> Inside Lists \n", "color: #bada55");
    // console.log("USER ID: ", this.props.userId);
    // console.log("LOGGED IN: ", this.props.loggedIn);
    // console.log("PROPS: ", this.props);
    console.log("---------------------");

    return (
      <div className="lists">
        This is the lists page
        <Button onClick={this.handleLogout}>Logout</Button>
      </div>
    );
  }
}

export default withAuth(Lists);
// export default connect(null, actions)(Lists);
