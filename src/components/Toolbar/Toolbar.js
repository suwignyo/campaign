import React, { Component } from "react";
import "./Toolbar.css";
import SideBar from "../SideBar/SideBar";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";

class Toolbar extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <Navbar style={{ backgroundColor: this.props.color, color: "white" }}>
        <Navbar.Header>
          <Navbar.Brand>
            <img src={this.props.logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              How To Support
            </NavItem>
            <NavItem eventKey={2} href="#">
              Contact Us
            </NavItem>
            <NavItem eventKey={2} href="#">
              $20 Referral Bonus
            </NavItem>
            <NavDropdown
              eventKey={3}
              title="Dropdown"
              id="basic-nav-dropdown"
              className="dropdownMenu"
            >
              <MenuItem eventKey={3.1}>How To Support</MenuItem>
              <MenuItem eventKey={3.2}>Contact Us</MenuItem>
              <MenuItem eventKey={3.3}>$20 Referral Bonus</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Sign Up</MenuItem>
              <MenuItem eventKey={3.3}>Login</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Sign Up
            </NavItem>
            <NavItem eventKey={2} href="#">
              Login
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Toolbar;

// <header className="toolbar">
// <div id="bar" />
// <nav className="toolbar__navigation">
//   <div className="toolbar__logo">
//     <a href="/">LOGO</a>
//   </div>
//   <div className="toolbar__navigation-items">
//     <ul>
//       <li>
//         <a href="/">How To Support</a>
//       </li>
//       <li>
//         <a href="/">Contact Us</a>
//       </li>
//       <li>
//         <a href="/">$20 Referral Bonus</a>
//       </li>
//     </ul>
//   </div>
//   <div className="spacer" />
//   <div className="toolbar__navigation-items">
//     <ul>
//       <li>
//         <a href="/">Sign Up</a>
//       </li>
//       <li>
//         <a href="/">Login</a>
//       </li>
//     </ul>
//   </div>
// </nav>
// </header>
