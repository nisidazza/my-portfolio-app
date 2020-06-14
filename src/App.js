import React from "react";
import "./App.css";
import SideNav from "./components/SideNav";

class App extends React.Component {
  render() {
    return (
      <div className="page-container">
        <SideNav />
      </div>
    );
  }
}

export default App;
