import React from "react";
import "./socials.css";
import Twitter from "../../utils/Twitter.png";
import facebook from "../../utils/facebook.png";
import linkedIn from "../../utils/linkedIn.png";
const Socials = () => {
  return (
    <div>
      <div className="socials">
        <a href="#twitter">
          <img src={Twitter}></img>
        </a>
        <a href="#facebook">
          <img src={facebook}></img>
        </a>
        <a href="#linkedIn">
          <img src={linkedIn}></img>
        </a>
      </div>
    </div>
  );
};

export default Socials;
