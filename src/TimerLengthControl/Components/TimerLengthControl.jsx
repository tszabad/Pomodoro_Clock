import React, { Component } from "react";

class TimerLengthControl extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="length-control container">
        <div className="row">Break Length</div>
        <button className="btn-level" value="-" onClick={this.handleBreak}>
          <i className="fa fa-arrow-down fa-2x" />
        </button>
        <div>{this.props.startBreak / 60}</div>
        <button className="btn-level" value="+" onClick={this.handleBreak}>
          <i className="fa fa-arrow-up fa-2x" />
        </button>
        <div className="row">Session Length</div>
        <button className="btn-level" value="-" onClick={this.handleSession}>
          <i className="fa fa-arrow-down fa-2x" />
        </button>
        <div>{this.props.startSession / 60}</div>
        <button className="btn-level" value="+" onClick={this.handleSession}>
          <i className="fa fa-arrow-up fa-2x" />
        </button>
      </div>
    );
  }
}

export default TimerLengthControl;
