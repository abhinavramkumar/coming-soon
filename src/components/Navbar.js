import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="container">
        <div className="Navbar__Wrapper">
          <div className="Navbar__Logo">Logo</div>
          <div className="Navbar__Links">
            <NavLink className="Navbar__NavLink" to="/" exact={true}>
              Home
              <svg className="Navbar__Underline">
                <path d="M0 0 L200  0Z" />
              </svg>
            </NavLink>
            <NavLink
              className="Navbar__NavLink"
              activeClassName="active"
              to="/sample-projects"
            >
              Sample Projects
              <svg className="Navbar__Underline">
                <path d="M0 0 L200  0Z" />
              </svg>
            </NavLink>
            <NavLink
              className="Navbar__NavLink"
              activeClassName="active"
              to="/hire-me"
            >
              Hire Me
              <svg className="Navbar__Underline">
                <path d="M0 0 L200  0Z" />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
