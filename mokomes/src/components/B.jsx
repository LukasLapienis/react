import React from "react";

export const B = ({ handleGenerate, handleCounter, sqlLenght }) => {
  return (
    <div className="ComponentB" style={{ backGroundColor: "bisque" }}>
      <button onClick={handleGenerate}>
        Generate squares in A {sqlLenght}
      </button>
      <br />
      <button onClick={handleCounter}>Counter button</button>
    </div>
  );
};
