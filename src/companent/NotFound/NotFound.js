import React, { Component } from "react";
import NotFoundd from "../images/NotFound.png";

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <img style={{ width: "100%" }} src={NotFoundd} alt="..."></img>
        </div>
        <button
          style={{ marginLeft: "20%", marginBottom: "10%" }}
          type="button"
          class="btn btn-danger"
        >
          Əsas səhifə
        </button>
      </div>
    );
  }
}
