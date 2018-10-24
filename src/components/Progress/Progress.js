import React, { Component } from "react";
import { Line } from "rc-progress";
import moment from "moment";

class Progress extends Component {
  componentDidMount() {}
  render() {
    const percent = () => {
      if (Math.floor((this.props.raised / this.props.goal) * 100 >= 100)) {
        return 100;
      } else {
        return Math.floor((this.props.raised / this.props.goal) * 100);
      }
    };
    const goal = percent();
    const percentRaised = Math.floor(
      (this.props.raised / this.props.goal) * 100
    );

    let daysLeft = moment(this.props.endsAt).fromNow();
    return (
      <div>
        <div style={{ paddingTop: "1rem" }}>${this.props.raised} raised</div>
        <Line
          strokeColor="#d22030"
          strokeWidth="2"
          trailWidth="2"
          trailColor="#D9D9D9"
          percent={goal}
          id="time-bar"
        />
        <div
          style={{
            paddingTop: "1rem",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <span>
            {percentRaised}% of ${this.props.goal} goal
          </span>
          <span>{daysLeft}</span>
        </div>
      </div>
    );
  }
}

export default Progress;
