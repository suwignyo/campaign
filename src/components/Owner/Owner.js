import React, { Component } from "react";
import "./Owner.css";

class Owner extends Component {
  render() {
    return (
      <div className="owner">
        <div
          style={{
            height: "40px",
            width: "40px",
            border: "1px black solid",
            borderRadius: "40px",
            marginRight: "1rem"
          }}
        />
        <div>
          <div>{this.props.owner}</div>
          <div>{this.props.location}</div>
        </div>
      </div>
    );
  }
}

export default Owner;
