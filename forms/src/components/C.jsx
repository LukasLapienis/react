import React, { useState } from "react";

export const C = () => {
  const [ischecked, setIsChecked] = useState(false);

  const [showSquare, setShowSquare] = useState(false);

  const handleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };

  const handleShowSquare = () => {
    setShowSquare(ischecked);
  };

  return (
    <div>
      <button onClick={handleShowSquare}>Display</button>
      <input type="checkbox" onChange={handleCheckbox} />
      <div>{showSquare ? <div className="blueSquare"> </div> : null}</div>
    </div>
  );
};
