import React, { Component } from "react";
import "./Campaign.css";
import Progress from "../Progress/Progress";
import Owner from "../Owner/Owner";
import ListItem from "../ListItem/ListItem";
import Supporter from "../Supporter/Supporter";
import { Row, Col } from "react-bootstrap";

class Campaign extends Component {
  render() {
    return (
      <div>
        <Row className="campaign-wrapper">
          <Col xs={10} sm={6} md={6} lg={4} className="campaign__image">
            <img src={this.props.campaignData.image} alt="" />
          </Col>
          <Col xs={10} sm={4} md={4} lg={3} className="campaign__details">
            <div className="campaign__category">
              {this.props.campaignData.category}
            </div>
            <h1>{this.props.campaignData.name}</h1>
            <p>{this.props.campaignData.description}</p>
            <div>
              <p>Owner</p>
              <Owner
                owner={this.props.campaignData.owner.name}
                location={this.props.campaignData.location}
              />
              <Progress
                raised={this.props.campaignData.amountRaised}
                goal={this.props.campaignData.goal}
                endsAt={this.props.campaignData.endsAt}
              />
              <div className="donatebutton">
                <button>Shop {"&"} Donate </button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="campaign-wrapper">
          <Col className="bundles-categories" xs={10} sm={6} md={6} lg={4}>
            <ListItem
              bundles={this.props.campaignData.bundles}
              givePercentage={this.props.campaignData.givePercentage}
              categories={this.props.campaignData.categories}
            />
          </Col>
          <Col xs={10} sm={4} md={4} lg={3}>
            <Supporter supporters={this.props.campaignData.supporters} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Campaign;
