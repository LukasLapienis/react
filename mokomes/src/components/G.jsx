import React, { useState } from "react";

export const G = () => {
  const [kvadratai, setKvadratai] = useState([]);

  return (
    <div className="componentG">
      <button onClick={() => setKvadratai((prev) => [...prev, "kvadratas"])}>
        Add
      </button>
      <div className="sqContainer">
        {kvadratai.map((kv, i) => (
          <div
            key={i}
            className="kvadr"
            style={{ backgroundColor: "blue" }}
          ></div>
        ))}
      </div>
    </div>
  );
};
