import React, { Component } from "react";
import "./Bundle.css";

export default class Bundle extends Component {
  render() {
    let cashBack = (
      this.props.bundle.price *
      (this.props.givePercentage / 100)
    ).toFixed(2);
    return (
      <div className="bundle">
        <div className="bundle-image">
          <img src={this.props.bundle.image} alt="" />
        </div>
        <div style={{ padding: "0 1rem" }}>
          <h4>{this.props.bundle.title}</h4>
          <h5 style={{ color: "grey" }}>{this.props.bundle.description}</h5>
          <div className="price-container">
            <h4>
              <strong>${this.props.bundle.price}</strong>
            </h4>
            <h5 style={{ color: "rgb(210, 32, 48)" }}>
              Donate ${cashBack} cash back
            </h5>
            <div className="buy-share">
              <button>Buy</button>
              <button
                style={{
                  border: "none",
                  color: "white",
                  background: "#d22030",
                  borderRadius: "2px",
                  padding: "0.5rem 2rem"
                }}
              >
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
