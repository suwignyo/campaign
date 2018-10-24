import React, { Component } from "react";
import Bundle from "../Bundle/Bundle";
import "./Bundles.css";

class Bundles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bundleList: []
    };
  }

  componentDidMount() {
    let bundleArray = [];
    let data = this.props.bundles;
    data.forEach((item, index, arr) => {
      if (index % 2) {
        bundleArray.push([data[index - 1], data[index]]);
      } else if (Object.is(arr.length - 1, index) && data.length % 2) {
        bundleArray.push([data[index]]);
      }
    });
    this.setState({
      bundleList: bundleArray
    });
  }
  render() {
    return (
      <div>
        {this.state.bundleList.map((elem, index, arr) => {
          if (
            Object.is(arr.length - 1, index) &&
            this.props.bundles.length % 2
          ) {
            return (
              <div className="bundles">
                <Bundle
                  bundle={elem[0]}
                  givePercentage={this.props.givePercentage}
                />
                <div style={{ width: "50%", margin: "1rem" }} />
              </div>
            );
          } else {
            return (
              <div className="bundles">
                <Bundle
                  bundle={elem[0]}
                  givePercentage={this.props.givePercentage}
                />
                <Bundle
                  bundle={elem[1]}
                  givePercentage={this.props.givePercentage}
                />
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Bundles;
