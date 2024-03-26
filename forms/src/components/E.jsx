import React, { useState } from "react";

export const E = () => {
  const [blueCheckbox, setBlueCheckbox] = useState(true);
  const [greenCheckbox, setGreenCheckbox] = useState(false);
  const handleBlueCheckBox = () => {
    setBlueCheckbox((prev) => !prev);
    setGreenCheckbox((prev) => !prev);
  };
  const handleGreenCheckBox = () => {
    setGreenCheckbox((prev) => !prev);
    setBlueCheckbox((prev) => !prev);
  };
  return (
    <div className="container">
      <input
        type="checkbox"
        checked={blueCheckbox}
        onChange={handleBlueCheckBox}
      />
      <input
        type="checkbox"
        checked={greenCheckbox}
        onChange={handleGreenCheckBox}
      />
    </div>
  );
};
