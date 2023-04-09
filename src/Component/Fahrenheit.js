import React, { Component } from "react";

class Fahrenheit extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-y" id="text">
          {this.props.fahrenheit} Fahrenheit °F
        </div>
      </div>
    );
  }
}
export default Fahrenheit;
