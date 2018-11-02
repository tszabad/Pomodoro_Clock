import React, { Component } from "react";
import ReactDOM from "react-dom";
import Timer from "./Timer/Components/Timer";
import * as moment from "moment";
import "./styles.css";
import bootstrap from "bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="text-center">Pomodoro clock</h1>

        <Timer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
