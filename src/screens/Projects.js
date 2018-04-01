import React, { Component } from "react";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { history } from "../router/AppRouter";

class Projects extends Component {
  render() {
    return (
      <div className="ScreenWrapper">
        <div className="container">
          <section className="Projects">
            {/* Page Header */}
            <article className="Projects__Header">
              <h2>Sample Projects</h2>
              <p>Here's a preview of some of my work.</p>
            </article>

            {/* Search bar */}
            {/* <article className="Projects__Searchbar">
              <div className="Projects__Searchbar-Wrapper">
                <div className="Projects__Searchbar-Input">
                  <input type="text" />
                  <button className="Projects__Search-Button">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
                <div className="Projects__Searchbar-Tags">
                  <span className="Projects__Searchbar-Tag">Admin</span>
                  <span className="Projects__Searchbar-Tag">React</span>
                  <span className="Projects__Searchbar-Tag">Firebase</span>
                  <span className="Projects__Searchbar-Tag">Notes</span>
                  <span className="Projects__Searchbar-Tag">Calculator</span>
                </div>
              </div>
            </article> */}

            {/* Projects List */}
            <article className="Projects__ProjectsList">
              <div className="Projects__ProjectSingle">
                <div className="Projects__ProjectSingle-Cover">
                  <h4>Calc X</h4>
                  <p>A simple text expression based calculator</p>
                  <Link to="/sample-project/calc-x">View Project</Link>
                </div>
                <div className="Projects__ProjectSingle-Image">
                  <img src="" alt="Calc X" />
                </div>
                <div className="Projects__ProjectSingle-Caption">
                  <h4>Calc X</h4>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    );
  }
}

export default Projects;
