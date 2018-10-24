import React from "react";

const Campaign = props => {
    return (
      <div>
        {props.CampaignData.name}
      </div>
    );
  }

export default Campaign;

import React, { Component } from "react";
import Campaign from "./Campaign.jsx";

class CampaignsList extends Component {
  constructor() {
    super();
    this.state = {
        fireRedirect: false,
        tempCampaign: {}
    };
  }

  selectCampaign = () => {
    this.setState({ fireRedirect: true })
  }

  render() {
      if (fireRedirect) {
          return <Campaign CampaignData={this.state.tempCampaign}/>
      }
    return (
  <main >
    {this.props.flipGive.map(CampaignElement => (
        <img src={CampaignElement.image} onClick={this.selectCampaign && this.setState({tempCampaign: CampaignElement})}/>
    ))}
  </main>
    );
  }
}
export default CampaignsList;

https://reactjs.org/docs/conditional-rendering.html
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
        Campaigns: []
    };
  }

  render() {
    return (
      <div>
        <CampaignsList flipGive={this.state.Campaigns}/>
      </div>
    );
  }
}
export default App;