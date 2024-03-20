import React from "react";

export const E = ({ handleClickFormE, handleClickE, formE, randNumber }) => {
  return (
    <div className="componentE">
      <button onClick={handleClickFormE}> Change </button>
      <button onClick={handleClickE}> Random </button>
      <div className={formE}>{randNumber}</div>
    </div>
  );
};
