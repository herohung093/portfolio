import React from "react";
import "../skills.css";
import Zoom from "react-reveal/Zoom";
const SkillBar = props => {
  const color = props.name === "Agile" ? "#a0600d" : "#00a1a7";

  return (
    <div className="wrapper divBar">
      <Zoom>
        <div
          className="divBar"
          style={{
            width: props.level + "%",
            transition: "2s",
            backgroundColor: color,
            WebkitBackfaceVisibility: "hidden",
            WebkitPerspective: "1000",
            WebkitTransform: "translate3d(0, 0, 0)",

            WebkitTransform: "translateZ(0)"
          }}
        >
          {props.skill}
          <span className="spanBar">{props.level}%</span>
        </div>
      </Zoom>
    </div>
  );
};

export default SkillBar;
