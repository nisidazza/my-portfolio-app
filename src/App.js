import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router";
import "./App.css";
import SideNav from "./components/SideNav";
import Home from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <Router>
        <SideNav />
        <div className="page-container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
