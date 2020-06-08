import React, { Component } from "react";
import NotFoundd from "../images/NotFound.png";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <img style={{ width: "100%" }} src={NotFoundd} alt="..."></img>
        </div>
        <Link
        to="/"
          style={{ marginLeft: "20%", marginBottom: "10%" }}
          type="button"
          className="btn btn-danger"
        >
          Əsas səhifə
        </Link>
      </div>
    );
  }
}
