import React, { Component } from "react";
import TimerLengthControl from "../..//TimerLengthControl/Components/TimerLengthControl";
import moment from "moment";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      break: false,
      runningTime: 1500,
      startSession: 1500,
      startBreak: 300,
      counter: "0",
      brkLength: 5,
      seshLength: 25
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleBreak = this.handleBreak.bind(this);
    this.setBrkLength = this.setBrkLength.bind(this);
    this.setSeshLength = this.setSeshLength.bind(this);

    this.timer;
  }
  setBrkLength(e) {
    this.lengthControl(
      "brkLength",
      e.currentTarget.value,
      this.state.brkLength,
      "Session"
    );
  }
  setSeshLength(e) {
    this.lengthControl(
      "seshLength",
      e.currentTarget.value,
      this.state.seshLength,
      "Break"
    );
  }

  handleBreak() {
    this.setState({
      runningTime: this.state.startBreak
    });
  }

  handleClick() {
    this.setState(state => {
      if (state.status) {
        clearInterval(this.timer);
      } else if (!state.status) {
        this.timer = setInterval(() => {
          if (this.state.runningTime >= 1) {
            this.setState({ runningTime: this.state.runningTime - 1 });
          } else {
            this.setState({ runningTime: 1500, status: false });
            clearInterval(this.timer);
          }
        }, 1000);
      }

      return { status: !state.status };
    });
  }

  handleReset() {
    this.setState({ runningTime: 1500, status: false });
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="container-fluid">
        <TimerLengthControl
          startBreak={this.state.startBreak}
          startSession={this.state.startSession}
        />

        <div>
          <span className="border border-dark">
            <h1 className=" display-1 text-center" id="time-left">
              {this.state.runningTime}
            </h1>
          </span>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col">
                <button
                  className="btn btn-dark"
                  id="start_stop"
                  type="button"
                  onClick={this.handleClick}
                >
                  {this.state.status ? "Stop" : "Start"}
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-dark"
                  type="button"
                  onClick={this.handleBreak}
                >
                  Break
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-dark"
                  id="reset"
                  type="button"
                  onClick={this.handleReset}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Timer;
