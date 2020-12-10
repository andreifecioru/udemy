import React from "react";

import "../styles/components/SeasonDisplay.css";

const getCurrentSeason = (latitude) => {
  const currentMonth = new Date().getMonth();

  let currentSeason;
  if (latitude === null) {
    currentSeason = "unknown";
  } else if (currentMonth > 2 && currentMonth < 9) {
    currentSeason = latitude >= 0 ? "summer" : "winter";
  } else {
    currentSeason = latitude >= 0 ? "winter" : "summer";
  }

  return currentSeason;
};

// Component configuration object
const configurations = {
  unknown: {
    text: "I can't tell the weather...",
    iconName: "question",
  },
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it's chilly!",
    iconName: "snowflake",
  },
}

const SeasonDisplay = (props) => {
  const season = getCurrentSeason(props.latitude);
  const {iconName, text} = configurations[season];

  return (
    <div className={`ui icon message season-display ${season}`}>
      <i className={`${iconName} icon`}></i>
      <div className="content">
        <div className="header">
          Current season status
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SeasonDisplay;