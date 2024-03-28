import React, { useState, useEffect } from "react";

export const Ketvirtas = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const numberFromLS = localStorage.getItem("skaicius");
    if (numberFromLS === null) {
      localStorage.setItem("skaicius", 0);
    }
    setNumber(localStorage.getItem("skaicius"));
  }, []);

  const handlePlus = () => {
    let numberis = localStorage.getItem("skaicius");
    numberis++;
    setNumber(parseInt(numberis));
    localStorage.setItem("skaicius", numberis);
  };

  return (
    <div className="cardsContainer">
      <button onClick={handlePlus}>+</button>
      <h1>{number}</h1>
    </div>
  );
};
