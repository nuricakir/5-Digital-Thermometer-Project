

import Celcius from "./Component/Celcius";
import Fahrenheit from "./Component/Fahrenheit";
import Kelvin from "./Component/Kelvin";
import { Component } from "react";
import "./App.css";
import { Toast, ToastHeader } from "reactstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      standartCelcius: 0,
      fahrenheit: 32,
      kelvin: 273.15,
    };
  }
  render() {
    let sıcaklıkarttir = () => {
      this.setState({
        standartCelcius: this.state.standartCelcius + 1,
        fahrenheit: (this.state.standartCelcius * 9) / 5 + 32,
        kelvin: this.state.standartCelcius + 273.15,
      });
    };

    return (
      <div className="container-fluid bg-dark vh-100 d-flex align-items-center">
        <div className="text-white container-fluid text-center">
          <div className="h1">Dijital Termometre</div>
          <div>
            <Toast className="toastt">
              <ToastHeader icon="danger"></ToastHeader>
              <p id="title">
                <b> {this.state.standartCelcius} Derece</b>{" "}
              </p>
            </Toast>
          </div>

          <button className="button-container" onClick={() => sıcaklıkarttir()}>
            {" "}
            <p className="butonyazısı">
              {" "}
              <b> Sıcaklık Arttır</b>
            </p>
          </button>

          <div className="d-flex row justify-content-around p-5">
            <div className="mt-6 col-lg-3 col-sm-12 fs-2">
              {this.state.standartCelcius}
              <Celcius />
            </div>
            <div className="mt-6 col-lg-3 col-sm-12 fs-2">
              {this.state.fahrenheit}
              <Fahrenheit />
            </div>
            <div className="mt-6 col-lg-3 col-sm-12 fs-2">
              {this.state.kelvin}
              <Kelvin />
            </div>
          </div>

          <p className="mt-5 italic fs-4">
            <b>Nuri ÇAKIR</b>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
