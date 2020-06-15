import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import SideNav from "./components/SideNav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route component={SideNav} />
        <div className="page-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
