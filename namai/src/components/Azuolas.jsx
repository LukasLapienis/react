import React, {useState} from "react";

export const Azuolas = () => {
    const [azuolai, setAzuolai] = useState([])

    const handleSubmit = () => {
        setAzuolai((prev) => [...prev, azuolai.length - 1 + 1]);
    };

    return (
      <div className="azuolas child">
        <button onClick={handleSubmit}>Azuolas</button>
        <div className="treeContainer">
        {azuolai.map((azuolas) => (
          <div key={azuolas} className="tree">Azuolas</div>
        ))}
      </div>
      </div>
    );
  };