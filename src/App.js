import React from "react";
import NavBar from "./components/navBar";
import "./App.css";
import "./skills.css";
import Banner from "./components/banner";
import About from "./components/about";
import SkillSet from "./components/skillsets";
import Projects from "./components/projects";
import { classImplements } from "@babel/types";
import Scrollspy from "react-scrollspy";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: ""
    };
    this.bodyElement = null;
    this.aboutSectionOffset = null;
    this.projectsSectionOffset = null;
    this.skillSetSectionOffset = null;

    this.getCurrentSection = this.getCurrentSection.bind(this);
  }

  componentDidMount() {
    this.aboutSectionOffset = document.getElementById("about").offsetHeight;
    this.projectsSectionOffset = document
      .getElementById("projects")
      .getBoundingClientRect().top;
    this.skillSetSectionOffset = document.getElementById("skillSet").offsetTop;
    this.bodyElement = document.getElementById("body");

    window.addEventListener("scroll", this.getCurrentSection);
  }

  getCurrentSection() {
    const offsetTop = this.bodyElement.getBoundingClientRect().top;

    // console.log(Math.abs(offsetTop));
    // console.log(Math.abs(this.aboutSectionOffset));
    // console.log(Math.abs(this.projectsSectionOffset));
    // console.log(Math.abs(this.skillSetSectionOffset));

    if (
      Math.abs(offsetTop) >= Math.abs(this.aboutSectionOffset) &&
      Math.abs(offsetTop) < Math.abs(this.skillSetSectionOffset)
    )
      return this.setState({ currentSection: "about" });
    if (
      Math.abs(offsetTop) >= Math.abs(this.skillSetSectionOffset) &&
      Math.abs(offsetTop) < Math.abs(this.projectsSectionOffset)
    )
      return this.setState({ currentSection: "about" });
    return this.setState({ currentSection: "projects" });
  }

  render() {
    console.log("about: ", this.aboutSectionOffset);
    console.log("skill: ", this.skillSetSectionOffset);
    console.log("prod: ", this.projectsSectionOffset);
    return (
      <body
        id="body"
        data-spy="scroll"
        data-target="navbarSupportedContent"
        data-offset="0"
      >
        <NavBar section={this.state.currentSection}></NavBar>
        {document.getElementById === "about"
          ? console.log("about")
          : console.log("else")}
        <Banner></Banner>
        <About></About>
        <SkillSet></SkillSet>

        <Projects></Projects>
      </body>
    );
  }
}

export default App;
