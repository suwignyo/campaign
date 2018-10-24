import React, { Component } from "react";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import Tabs from "./components/Tabs/Tabs";
import Campaign from "./components/Campaign/Campaign";
import CampaignList from "./components/CampaignList/CampaignList";
import Footer from "./components/Footer/Footer";
class App extends Component {
  constructor() {
    super();
    this.state = {
      logo: "",
      color: "",
      campaignCollection: []
    };
  }
  componentDidMount() {
    fetch("https://s3.amazonaws.com/flipgive-developer-test/base.json", {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000/"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        let campaigns = data.campaigns.map(campaign => {
          return campaign;
        });
        this.setState({
          campaignCollection: campaigns,
          logo: data.logo,
          color: data.primaryColor
        });
      });
  }

  onClick = id => {
    this.state.campaignCollection.forEach(i => {
      if (i.id === id) {
        this.setState({
          campaign: i
        });
      }
    });
  };

  render() {
    return (
      <div id="app" style={{ height: "100vh" }}>
        <Toolbar logo={this.state.logo} color={this.state.color} />
        <main style={{ marginTop: "65px" }}>
          <CampaignList campaigns={this.state.campaignCollection} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
