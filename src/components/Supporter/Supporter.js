import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Bundles from "../Bundles/Bundles";
import Categories from "../Categories/Categories";
import "./Supporter.css";
import moment from "moment";

class Supporter extends Component {
  render() {
    return (
      <Tabs defaultActiveKey={1} className="supporter-tab">
        <Tab eventKey={1} title="Supporter">
          <ul style={{ padding: "0 3rem" }}>
            {this.props.supporters.map((elem, index) => {
              let date = moment(elem.supportedAt).fromNow();
              return (
                <li className="supporter-content">
                  <h5 className="supporter-name">{elem.supporterName}</h5>
                  <h4 className="supporter-donation">
                    {elem.action} <strong>${elem.giveAmount}</strong> to{" "}
                    <span style={{ color: "#d22030" }}>
                      {elem.teamMemberName}
                    </span>
                  </h4>
                  <h5 className="supporter-date">{date}</h5>
                </li>
              );
            })}
          </ul>
        </Tab>
        <Tab eventKey={2} title="Team Members">
          <p>Unavailable</p>
        </Tab>
      </Tabs>
    );
  }
}

export default Supporter;
