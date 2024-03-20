import React, { useState } from "react";

export const H = () => {
  const [addSq, setAddSq] = useState([]);

  return (
    <div className="componentH">
      <button onClick={() => setAddSq((prev) => [...prev, "red"])}>
        Add red
      </button>
      <button onClick={() => setAddSq((prev) => [...prev, "blue"])}>
        Add blue
      </button>
      <button onClick={() => setAddSq([])}>Reset</button>
      <div className="sqContainer">
        {addSq.map((kv, i) => (
          <div key={i} className="kvadr" style={{ backgroundColor: kv }}></div>
        ))}
      </div>
    </div>
  );
};
