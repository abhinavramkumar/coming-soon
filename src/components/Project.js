import React from "react";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faSearch, faArrowRight } from "@fortawesome/fontawesome-free-solid";
const Project = ({ project }) => {
  return (
    <div className="Project">
      <div className="Project-Cover">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <Link to={`/sample-project/${project.id}`}>
          View Project
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      <div
        className="Project-Image"
        style={{
          backgroundImage: `url(${project.imageMain})`
        }}
      />
      <div className="Project-Caption">
        <p>{project.title}</p>
      </div>
    </div>
  );
};

export default Project;
