import React, { Component } from "react";

class Celcius extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-y" id="text">
          {this.props.celcius}Celcius °C
        </div>
      </div>
    );
  }
}

export default Celcius;
