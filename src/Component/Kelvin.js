import React, { Component } from "react";

class Kelvin extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-y" id="text">
          {this.props.kelvin} Kelvin °K
        </div>
      </div>
    );
  }
}

export default Kelvin;
