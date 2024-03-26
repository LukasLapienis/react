import React, { useState } from 'react';

export const Uosis = () => {
  const [uosiai, setUosiai] = useState([]);

  const handleSubmit = () => {
    setUosiai((prev) => [...prev, uosiai.length - 1 + 1]);
  };

  return (
    <div className="uosis child">
      <button onClick={handleSubmit}>Uosis</button>
      <div className="treeContainer">
        {uosiai.map((uosis) => (
          <div key={uosis} className="tree">
            Uosis
          </div>
        ))}
      </div>
    </div>
  );
};
