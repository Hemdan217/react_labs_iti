import React from "react";
import { ProgressBar } from "react-bootstrap";
const SkillItem = (props) => {
  return (
    <>
      <div className="progressBar">
        <label>{props.skill.name}</label>
        <ProgressBar
          now={props.skill.progress}
          label={`${props.skill.progress}% completed`}
        />
      </div>
    </>
  );
};

export default SkillItem;
