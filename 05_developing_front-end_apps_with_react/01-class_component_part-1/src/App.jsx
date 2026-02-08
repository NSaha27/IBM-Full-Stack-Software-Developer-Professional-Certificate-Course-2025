import React, { Component } from "react";
import Employee from "./components/Employee";

class App extends Component {
  render() {
    const empDesig = "Senior Developer";
    return <Employee empDesig={empDesig} />;
  }
}

export default App;
