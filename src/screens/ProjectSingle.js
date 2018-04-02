import React, { Component } from "react";
import projectsData from "../data/data";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/fontawesome-free-solid";
import { history } from "../router/AppRouter";
class ProjectSingle extends Component {
  state = {
    project: {},
    mainImage: ""
  };

  componentWillMount() {
    const id = String(this.props.match.params.id);

    const project = projectsData.filter(data => {
      return data.id === id;
    });
    this.setState(prevState => ({
      project: {
        ...project[0]
      }
    }));
  }

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
          <div className="ProjectSingle">
            <header className="ProjectSingle__Header">
              <h3>{this.state.project.title}</h3>
            </header>
            <section className="ProjectSingle__FlexWrapper">
              <article className="ProjectSingle__Main">
                <div className="ProjectSingle__Image-Main">
                  <img src={"." + this.state.project.imageMain} alt="main" />
                </div>
                <div className="ProjectSingle__Image-Array">
                  {this.state.project.imagesArray.map(image => (
                    <div className="ProjectSingle__Image-Small">
                      <img src={image.url} alt={image.name} />
                    </div>
                  ))}
                </div>
              </article>
              <aside className="ProjectSingle__Sidebar">
                {this.state.project.notes.map(note => <li>{note}</li>)}
              </aside>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectSingle;
