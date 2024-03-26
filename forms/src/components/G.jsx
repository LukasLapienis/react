import React from "react";

export const G = ({ isDisplayed }) => {
  return <>{isDisplayed ? <div className="blueSquare"></div> : null}</>;
};
