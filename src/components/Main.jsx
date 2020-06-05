import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Layout/Home";
import { Navbar, AllProjects, Blog, PostView } from "./index.js";
import NotFound from "./NotFound/NotFound";
import { langContext } from "../Context/langContext";
import Modal from "./Modal/Modal";
import { getLocalStorage, setLocalStorage } from "../utils/manageLocalStorage";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cls: 'linkAlter',
      lang: getLocalStorage('lang'),
      display: ''
    };
  }


  changeColor = () => {
      this.setState({ 
          cls:  this.state.cls === 'linkAlter'
                  ? ''
                  : 'linkAlter'
      })
  }

  handleClick = (e) => {
    const { value } = e.target
      this.setState({lang: value})
      setLocalStorage(value)
      this.setState({display:'none'})
  }

  render() {

    return (
      <>
        <Router>
          <langContext.Provider value={this.state.lang}>
              <Navbar/>
                <Switch>
                  <Route path="/" exact>
                      <Modal handleClick={this.handleClick} display={this.state.display}/>
                      <Home></Home>
                  </Route>
                  <Route path="/allProjects">
                    <AllProjects/>
                  </Route>
                  <Route path="/blog">
                    <Blog/>
                  </Route>
                  <Route path="/postView/:id">
                    <PostView/>
                  </Route>
                  <Route path="*">
                      <NotFound/>
                  </Route>
                </Switch>
          </langContext.Provider>
        </Router>
      </>
    );
  }
}

export default Main;
