import React, { Component } from "react";
import "../src/styling/index.css";
import General from "./components/General";
import About from "./components/About";
import WorkExp from "./components/WorkExp";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="mainwrap">
        <General
          lineone="Name"
          maintitle="General Info"
          linetwo="Title"
          linethree="linked-In page"
          linefour="Address"
          linefive="Email"
          linesix="Phone Number"
        />
        <About />
        <WorkExp titletop="Work Experience" />
        <WorkExp />
        <WorkExp />
      </div>
    );
  }
}

export default App;
