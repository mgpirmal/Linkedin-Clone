import React from "react";
import "./Widget.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widget() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgetsArticle">
      <div className="widgetsArticleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgetsArticleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgetsHeader">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Skill Shortage?", "Top news - 9,099 readers")}
      {newsArticle("Coronavirus: USA updates", "Top news - 15,845 readers")}
      {newsArticle("Space Billionairs", "Money - 516 readers")}
      {newsArticle("To the Moon!", "Crypto - 1,568 readers")}
      {newsArticle("Is Redux too good?", "Code - 123 readers")}
      {newsArticle("ReactJS vs Angular", "Top news - 8,456 readers")}
    </div>
  );
}

export default Widget;