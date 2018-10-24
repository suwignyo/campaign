import React, { Component } from "react";
import "./Category.css";

export default class Category extends Component {
  render() {
    return (
      <div className="category">
        <div className="category-image">
          <img src={this.props.category.image} alt="unavailable" />
        </div>
        <div className="category-desc">
          <h4>{this.props.category.name}</h4>
          <h5 style={{ color: "rgb(210, 32, 48)" }}>
            Donate {this.props.givePercentage}% cash back
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
    );
  }
}
