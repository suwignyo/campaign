import React, { Component } from "react";
import "./Tabs.css";
class Tabs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="campaign-tabs">
        <div className="wrapper">
          <h1 className="campaign-title">{this.props.campaign.name}</h1>
          <p>
            <span>{this.props.campaign.location}</span>
            <span>CAMPAIGN {this.props.campaign.id}</span>
          </p>
        </div>
      </div>
    );
  }
}
export default Tabs;
