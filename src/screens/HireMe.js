import React, { Component } from "react";
import { history } from "../router/AppRouter";

class HireMe extends Component {
  render() {
    return (
      <div className="ScreenWrapper">
        <div className="container">
          <h1>Hire Me</h1>
          <button onClick={() => history.goBack()}>Go Back</button>
        </div>
      </div>
    );
  }
}

export default HireMe;
