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
    const styledEqualBtn = {
      height: "100%",
      gridArea: "3 / 5 / 5 / 6",
    };

    const styledZeroBtn = {
      width: "100%",
      gridArea: "4 / 1 / 4 / 3",
    };

    return (
      <div className="calculator-app">
        <input
          type="text"
          className="calculator-display"
          value={this.state.displayScreenValue}
          disabled
        />
        <div className="calculator-keys">
          <button
            onClick={(e) => this.onClick(e.target.value)}
            type="button"
            className="btn btn-secondary border"
            value="7"
          >
            7
          </button>
          <button
            onClick={(e) => this.onClick(e.target.value)}
            type="button"
            className="btn btn-secondary border"
            value="8"
          >
            8
          </button>
          <button
            onClick={(e) => this.onClick(e.target.value)}
            type="button"
            className="btn btn-secondary border"
            value="9"
          >
            9
          </button>
          <button
            onClick={(e) => this.onClick(e.target.value)}
            type="button"
            className="operator btn btn-info border"
            value="/"
          >
            /
          </button>
          <button
            onClick={(e) => this.onClick(e.target.value)}
            type="button"
            className="clear-entry function btn btn-warning border"
            value="CE"
          >
            CE
          </button>

          <button
            onClick={(e) => this.onClick(e.target.value)}
            type="button"
            className="btn btn-secondary border"
            value="4"
          >
            4
          </button>
          <button
            onClick={(e) => this.onClick(e.target.value)}
            type="button"
            className="btn btn-secondary border"
            value="5"
          >
            5
          </button>
          <button
            onClick={(e) => this.onClick(e.target.value)}
            type="button"
            className="btn btn-secondary border"
            value="6"
          >
            6
          </button>
          <button
            onClick={(e) => this.onClick(e.target.value)}
            type="button"
            className="operator btn btn-info border"
            value="*"
          >
            *
          </button>
          <button
            onClick={(e) => this.onClick(e.target.value)}
            type="button"
            className="all-clear function btn btn-danger border"
            value="C"
          >
            C
          </button>

          <button
            onClick={(e) => this.onClick(e.target.value)}
            type="button"
            className="btn btn-secondary border"
            value="1"
          >
            1
          </button>
          <button
            onClick={(e) => this.onClick(e.target.value)}
            type="button"
            className="btn btn-secondary border"
            value="2"
          >
            2
          </button>
          <button
            onClick={(e) => this.onClick(e.target.value)}
            type="button"
            className="btn btn-secondary border"
            value="3"
          >
            3
          </button>
          <button
            onClick={(e) => this.onClick(e.target.value)}
            type="button"
            className="operator btn btn-info border"
            value="*"
          >
            -
          </button>

          <button
            style={styledZeroBtn}
            onClick={(e) => this.onClick(e.target.value)}
            type="button"
            className="btn btn-secondary border"
            value="0"
          >
            0
          </button>
          <button
            onClick={(e) => this.onClick(e.target.value)}
            type="button"
            className="decimal function btn btn-primary border"
            value="."
          >
            .
          </button>
          <button
            onClick={(e) => this.onClick(e.target.value)}
            type="button"
            className="operator btn btn-info border"
            value="+"
          >
            +
          </button>

          <button
            style={styledEqualBtn}
            onClick={(e) => this.onClick(e.target.value)}
            type="button"
            className="equal-sign operator btn btn-success border"
            value="="
          >
            =
          </button>
        </div>
      </div>
    );
  }
}
