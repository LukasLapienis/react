import React from "react";

export const BB = ({ letterB, handleClickB }) => {
  return (
    <div className="componentBB">
      <button onClick={handleClickB}> Show B </button>
      <p>{letterB}</p>
    </div>
  );
};
