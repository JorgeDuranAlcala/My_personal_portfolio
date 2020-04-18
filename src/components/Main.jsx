import * as React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Layout/Home";
import Navbar from "./Layout/Navbar";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Router>
        <Navbar></Navbar>
          <Switch>
            <Route path="/" exact>
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default Main;
