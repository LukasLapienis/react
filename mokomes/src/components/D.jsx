import React from "react";

export const D = ({ handleClickD, form }) => {
  return (
    <div className="componentD">
      <button onClick={handleClickD}> Change </button>
      <div className={form}></div>
    </div>
  );
};
