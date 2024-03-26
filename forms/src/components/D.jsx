import React, { useState } from "react";

export const D = () => {
  const [blueCheckbox, setBlueCheckbox] = useState(false);
  const [greenCheckbox, setGreenCheckbox] = useState(false);
  const handleBlueCheckBox = () => {
    setBlueCheckbox((prev) => !prev);
  };
  const handleGreenCheckBox = () => {
    setGreenCheckbox((prev) => !prev);
  };
  return (
    <div className="container">
      <div className={blueCheckbox ? "blueSquare" : "square"}>
        <input type="checkbox" onChange={handleBlueCheckBox} />
      </div>
      <div className={greenCheckbox ? "greenSquare" : "square"}>
        <input type="checkbox" onChange={handleGreenCheckBox} />
      </div>
      <div>
        {blueCheckbox && greenCheckbox ? (
          <div className="blueSquare"> </div>
        ) : null}
      </div>
    </div>
  );
};
