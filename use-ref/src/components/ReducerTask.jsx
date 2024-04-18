import React, { useReducer, useState } from "react";
import { addCustomNumberSquares } from "../actions/actionObjects";
import { customNumberSquaresReducer } from "../reducers/squaresReducer";

export const ReducerTask = () => {
  const [number, setNumber] = useState(0);
  const [squares, dispachSquares] = useReducer(customNumberSquaresReducer, []);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispachSquares(addCustomNumberSquares(number))}>
        Show Squares
      </button>
      <div className="generatorContainer">
        {squares?.map((square) => (
          <div className="square"></div>
        ))}
      </div>
    </div>
  );
};
