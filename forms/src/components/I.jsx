import React from "react";

export const I = ({ squareColor }) => {
  return (
    <div
      className={squareColor === "blue" ? "blueSquare" : "greenSquare"}
    ></div>
  );
};
