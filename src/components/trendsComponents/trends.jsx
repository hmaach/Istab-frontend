import React from "react";

import { CgMoreAlt } from "react-icons/cg";

const TrendsComponent = (props) => {
  return (
    <div id="trends-box">
      <div id="trends-left-box">
        <p id="trending">1 . Trending</p>
        <p id="title-trends">#{props.name}</p>
        <p id="tweet-number">{props.number} Tweets</p>
      </div>
      <div id="more-icon-box">
        <CgMoreAlt id="more-icon-trends" />
      </div>
    </div>
  );
};

export default TrendsComponent;
