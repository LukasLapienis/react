import React, { useState } from "react";

export const H = ({ handleRefresh }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };

  const handleClick = () => {
    handleRefresh(isChecked);
  };

  return (
    <div className="container">
      <h2>8 uzduotis</h2>
      <div>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        <button onClick={handleClick}>Refresh</button>
      </div>
    </div>
  );
};
