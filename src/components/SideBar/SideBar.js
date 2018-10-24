import React, { Component } from "react";
import "./SideBar.css";

class SideBar extends Component {
  render() {
    return (
      <nav className="side-bar">
        <ul>
          <li>
            <a href="/">Campaign</a>
          </li>
          <li>
            <a href="/">Okay</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideBar;
