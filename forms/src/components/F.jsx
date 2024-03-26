import React, { useState } from "react";

export const F = ({ handleShow }) => {
  const [check, setCheck] = useState(false);

  const handleChange = () => {
    setCheck((prev) => !prev);
    handleShow(!check);
  };

  return (
    <div className="container">
      <input type="checkbox" onChange={handleChange} />
    </div>
  );
};
