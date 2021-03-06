import React from "react";

const SVG = ({
  style = {},
  fill = "#56e856",
  width = "100%",
  className = "",
  viewBox = "0 0 48 48"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    className={`svg-icon ${className || ""}`}
  >
    <g>
      <path
        fill={fill}
        d="M24,26c6.6,0,12-5.4,12-12S30.6,2,24,2c-6.6,0-12,5.4-12,12S17.4,26,24,26z M24,4c5.5,0,10,4.5,10,10s-4.5,10-10,10   c-5.5,0-10-4.5-10-10S18.5,4,24,4z"
      />
      <path
        fill={fill}
        d="M33,28H15C7.8,28,2,33.8,2,41v5h2v-5c0-6.1,4.9-11,11-11h18c6.1,0,11,4.9,11,11v5h2v-5C46,33.8,40.2,28,33,28z"
      />
    </g>
  </svg>
);

export default SVG;
