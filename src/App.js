import React from "react";
import NavBar from "./components/navBar";
import "./App.css";
import "./skills.css";
import Banner from "./components/banner";
import About from "./components/about";
import SkillSet from "./components/skillsets";
import Projects from "./components/projects";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: "home",
    };

    this.onScrolling = this.onScrolling.bind(this);
  }

  aboutSection = null;
  skillSetSection = null;
  projectSection = null;

  componentDidMount() {
    window.addEventListener("scroll", this.onScrolling);
  }

  onScrolling() {
    if (this.isElementInViewPort(this.aboutSection))
      this.setState({ currentSection: "about" });
    else if (this.isElementInViewPort(this.skillSetSection))
      this.setState({ currentSection: "skillSet" });
    else if (this.isElementInViewPort(this.projectSection))
      this.setState({ currentSection: "projects" });
    else if (window.pageYOffset < this.aboutSection.offsetTop)
      this.setState({ currentSection: "home" });
  }

  isElementInViewPort(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  render() {
    return (
      <Col style={{ width: "100%" }}>
        <NavBar currentSection={this.state.currentSection}></NavBar>
        <Banner></Banner>
        <About
          ref={(ref) => (this.aboutSection = ReactDOM.findDOMNode(ref))}
        ></About>
        <SkillSet
          ref={(ref) => (this.skillSetSection = ReactDOM.findDOMNode(ref))}
        ></SkillSet>
        <Projects
          ref={(ref) => (this.projectSection = ReactDOM.findDOMNode(ref))}
        ></Projects>
      </Col>
    );
  }
}

export default App;
