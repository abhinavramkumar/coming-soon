import React, { Component } from "react";
import { history } from "../router/AppRouter";
import projectsData from "../data/data";
import { Project } from "../components";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/fontawesome-free-solid";
class Projects extends Component {
  render() {
    return (
      <div className="ScreenWrapper">
        <div className="container">
          <button
            className="goBackButton"
            onClick={() => history.goBack()}
            title="Go Back"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
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
              {projectsData.map(project => (
                <Project project={project} key={project.id} />
              ))}
            </article>
          </section>
        </div>
      </div>
    );
  }
}

export default Projects;
