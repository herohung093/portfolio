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

function App() {
  return (
    <body
      data-spy="scroll"
      data-target="navbarSupportedContent"
      data-offset="0"
    >
      <NavBar></NavBar>
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

export default App;
