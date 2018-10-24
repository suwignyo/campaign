import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Bundles from "../Bundles/Bundles";
import Categories from "../Categories/Categories";
import "./ListItem.css";

class ListItem extends Component {
  render() {
    return (
      <Tabs defaultActiveKey={1} id="uncontrolled-tab">
        <Tab eventKey={1} title="Bundles">
          <Bundles
            bundles={this.props.bundles}
            givePercentage={this.props.givePercentage}
          />
        </Tab>
        <Tab eventKey={2} title="Categories">
          <Categories
            categories={this.props.categories}
            givePercentage={this.props.givePercentage}
          />
        </Tab>
        <Tab eventKey={3} title="Updates">
          <p>There are currently no updates.</p>
        </Tab>
      </Tabs>
    );
  }
}

export default ListItem;
