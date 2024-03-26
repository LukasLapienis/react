import React, { useState } from 'react';

export const Antras = () => {
  const [squares, setSquares] = useState([]);

  const handleAdd = () => {
    setSquares((prev) => [...prev, { id: prev.length, counter: 0 }]);
  };

  const handleClickPlus = (id) => {
    setSquares((prev) =>
      prev.map((square) =>
        square.id === id ? { ...square, counter: square.counter + 1 } : square
      )
    );
  };

  return (
    <div className="container">
      <button onClick={handleAdd}>Add</button>

      <div className="squaresContainer">
        {squares.map((square) => (
          <div key={square.id} className="square">
            <button onClick={() => handleClickPlus(square.id)}>+</button>
            <p> {square.counter} </p>
          </div>
        ))}
      </div>
    </div>
  );
};
