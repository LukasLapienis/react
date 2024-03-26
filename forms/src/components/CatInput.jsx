import React, { useState } from "react";

export const CatInput = () => {
  const [cats, setCats] = useState([]);
  const [name, setName] = useState("");
  const [color, setColor] = useState("blue");

  const handleCatInput = () => {
    setCats((prev) => [...prev, { name: name, color: color }]);
    setName("");
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="container">
      <h2>9 uzduotis</h2>
      <div>
        <input type="text" value={name} onChange={handleName} />
        <select onChange={(e) => setColor(e.target.value)} value={color}>
          <option value="blue"> Blue </option>
          <option value="green"> Green </option>
          <option value="red"> Red </option>
        </select>
        <button onClick={handleCatInput}>Add Cat</button>

        {cats.map((cat, i) => (
          <div
            key={i}
            className="circle"
            style={{
              width: cat.name.length * 14 + "px",
              height: cat.name.length * 14 + "px",
              backgroundColor: cat.color,
            }}
          >
            {cat.name}
          </div>
        ))}
      </div>
    </div>
  );
};
