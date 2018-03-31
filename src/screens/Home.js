import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="ScreenWrapper">
        <div className="container">
          <div className="Home">
            <header className="Home__Header">
              <h1>
                Hi I'm Abhinav{" "}
                <span className="subtitle">
                  a Web Developer, Font enthusiast and a Coffee lover
                </span>
              </h1>
            </header>
            <article className="Home__Intro">
              <p>
                I create powerful web applications using Javascript, targeted
                towards small & medium sized businesses.
              </p>
              <p>
                I also help budding entreprenuers establish a web presence for
                them by building Websites / Web Applications & providing Search
                Engine Optimization{" "}
              </p>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
