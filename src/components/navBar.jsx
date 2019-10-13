import React from "react";
import styled from "styled-components";

const NavBar = props => {
  const NavBar = styled.div`
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 1px;
    position: relative;
    padding: 1px 15px;
    display: inline-block;
    color: #151515;
  `;

  console.log(props);
  return (
    <header
      className="main-nav nav-scroll sticky-top"
      style={{
        background: "linear-gradient(to right, #76bfe5 0%, #2ccfe2 100%)"
      }}
    >
      <NavBar>
        <nav className="navbar navbar-expand-lg navbar-light p-0 w-100">
          <a className="navbar-brand p-0" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar navbar-default" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#top">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skillSet">
                  Skill Set
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </NavBar>
    </header>
  );
};

export default NavBar;
