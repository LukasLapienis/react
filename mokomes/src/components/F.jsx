import React from "react";

export const F = ({ handleClickPlus, handleClickMinus, numberF }) => {
  return (
    <div className="componentF">
      <button onClick={handleClickPlus}> Plus </button>
      <button onClick={handleClickMinus}> Minus </button>
      <div>{numberF}</div>
    </div>
  );
};
