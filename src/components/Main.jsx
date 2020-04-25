import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Layout/Home";
import { Navbar, AllProjects, Blog, PostView } from "./index.js";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cls: 'linkAlter'
    };
  }

  changeColor = () => {
      this.setState({ 
          cls:  this.state.cls === 'linkAlter'
                  ? ''
                  : 'linkAlter'
      })
  }

  render() {

    return (
      <>
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact>
              <Home></Home>
            </Route>
            <Route path="/allProjects">
              <AllProjects/>
            </Route>
            <Route path="/blog">
              <Blog/>
            </Route>
            <Route path="/postView">
              <PostView/>
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default Main;
