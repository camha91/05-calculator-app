import React, { Component } from "react";
import "./Calculator.css";

export default class Calculator extends Component {
  render() {
    return (
      <div className="container">
        <input type="text" className="display" disabled />
        <table className="table">
          <tbody>
            <tr>
              <td>
                <button type="button" class="btn btn-default border">
                  7
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-default border">
                  8
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-default border">
                  9
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-default border">
                  /
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-default border">
                  CE
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" class="btn btn-default border">
                  4
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-default border">
                  5
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-default border">
                  6
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-default border">
                  *
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-default border">
                  C
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" class="btn btn-default border">
                  1
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-default border">
                  2
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-default border">
                  3
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-default border">
                  -
                </button>
              </td>
              <td rowSpan="2" height="50px">
                <button
                  style={{ width: "100%", height: "100%" }}
                  type="button"
                  class="btn btn-default border"
                >
                  =
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button
                  style={{ width: "100%" }}
                  type="button"
                  class="btn btn-default border"
                >
                  0
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-default border">
                  .
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-default border">
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
