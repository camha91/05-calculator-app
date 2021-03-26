import React, { Component } from "react";

export default class Calculator extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div classname="row">
          <div
            style={{ width: "500px" }}
            className="card text-white bg-default mt-5"
          >
            <div className="card-body">
              <div className="row-10">
                <div className="col mt-5">
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className="form-control"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                </div>
              </div>
              <div className="row-10">
                <div className="col-9">
                  <div className="row">
                    <div className="col-6">
                      <button type="button" class="btn btn-default border mr-2">
                        7
                      </button>
                      <button type="button" class="btn btn-default border mr-2">
                        8
                      </button>
                      <button type="button" class="btn btn-default border mr-2">
                        9
                      </button>
                      <button type="button" class="btn btn-default border mr-2">
                        4
                      </button>
                      <button type="button" class="btn btn-default border mr-2">
                        5
                      </button>
                      <button type="button" class="btn btn-default border mr-2">
                        6
                      </button>
                      <button type="button" class="btn btn-default border mr-2">
                        1
                      </button>
                      <button type="button" class="btn btn-default border mr-2">
                        2
                      </button>
                      <button type="button" class="btn btn-default border mr-2">
                        3
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <button type="button" class="btn btn-default border mr-2">
                        0
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
