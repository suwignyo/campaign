import React, { Component } from "react";
import Campaign from "../Campaign/Campaign";

class CampaignsList extends Component {
  constructor() {
    super();
    this.state = {
      fireRedirect: false,
      tempCampaign: []
    };
  }

  render() {
    const selectCampaign = data => {
      this.setState({ tempCampaign: data });
      this.setState({ fireRedirect: true });
    };
    if (!this.state.fireRedirect) {
      return (
        <main className="selection">
          {this.props.campaigns.map(elem => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "1rem"
              }}
              onClick={() => selectCampaign(elem)}
            >
              ID: {elem.id}, Name:
              {elem.name}
            </div>
          ))}
        </main>
      );
    } else {
      return <Campaign campaignData={this.state.tempCampaign} />;
    }
  }
}
export default CampaignsList;
