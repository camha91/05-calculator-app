import React, { Component } from "react";
import "./Calculator.css";

const initialState = {
  result: 0,
  current: "0",
  lastOperator: "+",
  displayScreenValue: "0",
  duplicatingCount: 0,
};

export default class Calculator extends Component {
  state = initialState;

  reset = () => {
    this.setState(initialState);
  };

  clearEntry = () => {
    this.setState({
      current: "0",
      displayScreenValue: "0",
    });
  };

  updateState = (newOperator) => {
    let tempResult;

    if (this.state.duplicatingCount < 1) {
      if ("+-*/=".indexOf(this.state.lastOperator) !== -1) {
        switch (this.state.lastOperator) {
          case "+":
            tempResult =
              parseFloat(this.state.result) + parseFloat(this.state.current);
            break;
          case "-":
            tempResult =
              parseFloat(this.state.result) - parseFloat(this.state.current);
            break;
          case "*":
            tempResult =
              parseFloat(this.state.result) * parseFloat(this.state.current);
            break;
          default:
            tempResult =
              parseFloat(this.state.result) / parseFloat(this.state.current);
        }
        this.setState({
          result: tempResult,
          current: "0",
          displayScreenValue: tempResult,
        });
      }

      this.setState({
        duplicatingCount: this.state.duplicatingCount + 1,
      });
    }

    this.setState({
      lastOperator: newOperator,
    });
  };

  onClick = (buttonValue) => {
    if ("+-*/=".indexOf(buttonValue) !== -1) {
      this.updateState(buttonValue);
    } else if (buttonValue === "C") {
      this.reset();
    } else if (buttonValue === "CE") {
      this.clearEntry();
    } else if (buttonValue === "=") {
      this.equal();
    } else {
      if (this.state.current === "0") {
        this.setState({
          current: buttonValue,
          displayScreenValue: buttonValue,
        });
      } else {
        this.setState({
          current: this.state.current + buttonValue,
          displayScreenValue: this.state.current + buttonValue,
        });
      }
      this.setState({
        duplicatingCount: 0,
      });
    }
  };

  componentDidUpdate = () => {
    console.log(`state: ${JSON.stringify(this.state)}`);
  };

  render() {
    return (
      <div className="container">
        <div className="display">{this.state.displayScreenValue}</div>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <button
                  onClick={(e) => this.onClick(e.target.textContent)}
                  type="button"
                  className="btn btn-default border"
                >
                  7
                </button>
              </td>
              <td>
                <button
                  onClick={(e) => this.onClick(e.target.textContent)}
                  type="button"
                  className="btn btn-default border"
                >
                  8
                </button>
              </td>
              <td>
                <button
                  onClick={(e) => this.onClick(e.target.textContent)}
                  type="button"
                  className="btn btn-default border"
                >
                  9
                </button>
              </td>
              <td>
                <button
                  onClick={(e) => this.onClick(e.target.textContent)}
                  type="button"
                  className="btn btn-default border"
                >
                  /
                </button>
              </td>
              <td>
                <button
                  onClick={(e) => this.onClick(e.target.textContent)}
                  type="button"
                  className="btn btn-default border"
                >
                  CE
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  onClick={(e) => this.onClick(e.target.textContent)}
                  type="button"
                  className="btn btn-default border"
                >
                  4
                </button>
              </td>
              <td>
                <button
                  onClick={(e) => this.onClick(e.target.textContent)}
                  type="button"
                  className="btn btn-default border"
                >
                  5
                </button>
              </td>
              <td>
                <button
                  onClick={(e) => this.onClick(e.target.textContent)}
                  type="button"
                  className="btn btn-default border"
                >
                  6
                </button>
              </td>
              <td>
                <button
                  onClick={(e) => this.onClick(e.target.textContent)}
                  type="button"
                  className="btn btn-default border"
                >
                  *
                </button>
              </td>
              <td>
                <button
                  onClick={(e) => this.onClick(e.target.textContent)}
                  type="button"
                  className="btn btn-default border"
                >
                  C
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  onClick={(e) => this.onClick(e.target.textContent)}
                  type="button"
                  className="btn btn-default border"
                >
                  1
                </button>
              </td>
              <td>
                <button
                  onClick={(e) => this.onClick(e.target.textContent)}
                  type="button"
                  className="btn btn-default border"
                >
                  2
                </button>
              </td>
              <td>
                <button
                  onClick={(e) => this.onClick(e.target.textContent)}
                  type="button"
                  className="btn btn-default border"
                >
                  3
                </button>
              </td>
              <td>
                <button
                  onClick={(e) => this.onClick(e.target.textContent)}
                  type="button"
                  className="btn btn-default border"
                >
                  -
                </button>
              </td>
              <td rowSpan="2" height="50px">
                <button
                  onClick={(e) => this.onClick(e.target.textContent)}
                  style={{ width: "100%", height: "100%" }}
                  type="button"
                  className="btn btn-default border"
                >
                  =
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button
                  onClick={(e) => this.onClick(e.target.textContent)}
                  style={{ width: "100%" }}
                  type="button"
                  className="btn btn-default border"
                >
                  0
                </button>
              </td>
              <td>
                <button
                  onClick={(e) => this.onClick(e.target.textContent)}
                  type="button"
                  className="btn btn-default border"
                >
                  .
                </button>
              </td>
              <td>
                <button
                  onClick={(e) => this.onClick(e.target.textContent)}
                  type="button"
                  className="btn btn-default border"
                >
                  +
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
