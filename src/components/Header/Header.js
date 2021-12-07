import "./Header.css";
import React from "react";
import Close from "../../assets/Close.png";
import Gear from "../../assets/Gear.png";
import Question from "../../assets/Question.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <h1>TOP-RATED TOURIST ATTRACTION IN SINGAPORE</h1>
      </div>
      <div className="header-btn">
        <img src={Gear} alt="Setting" />
        <img src={Question} alt="Question" />
        <img src={Close} alt="Close" />
      </div>
    </div>
  );
};

export default Header;
