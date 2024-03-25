import React, {useState} from "react";

export const Berzas = () => {
    const [berzai, setBerzai] = useState([])

    const handleSubmit = () => {
        setBerzai((prev) => [...prev, berzai.length - 1 + 1]);
    };

    return (
      <div className="berzas child">
        <button onClick={handleSubmit}>Berzas</button>
        <div className="treeContainer">
        {berzai.map((berzas) => (
          <div key={berzas} className="tree">Berzas</div>
        ))}
      </div>
      </div>
    );
  };