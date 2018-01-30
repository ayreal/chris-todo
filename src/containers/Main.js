import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Lists2 from "./Lists2";

class Main extends Component {
  render() {
    console.log("%c >> Inside Main \n", "color: #bada55");
    console.log("---------------------");

    return (
      <div className="main">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Lists2} />
        </Switch>
      </div>
    );
  }
}

export default Main;
