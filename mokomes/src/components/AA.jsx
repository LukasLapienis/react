import React from "react";

export const AA = ({ letterA, handleClick }) => {
  return (
    <div className="componentAA">
      <button onClick={handleClick}> Show A </button>
      <p>{letterA}</p>
    </div>
  );
};
