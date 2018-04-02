import React, { Component } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/fontawesome-free-solid";

class Subscription extends Component {
  render() {
    return (
      <article className="Subscription">
        <p className="semibold">Are you a Web Developer ?</p>
        <p>
          Subscribe to the Newsletter to Get Tutorials , Resources, Tips 'n'
          Tricks & become an awesome Web Developer.
        </p>
        <div className="Subscription-Wrapper">
          <input
            type="text"
            className="Subscription-Input"
            placeholder="Sign Up and Be the first to know when this website launches."
          />
          <button className="Subscribe-Button">
            Subscribe to the Newsletter
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </article>
    );
  }
}

export default Subscription;
