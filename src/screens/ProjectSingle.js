import React, { Component } from "react";

class ProjectSingle extends Component {
  render() {
    return (
      <div>
        <h1>Project Single Page</h1>
        <p>{this.props.match.params.id}</p>
      </div>
    );
  }
}

export default ProjectSingle;
