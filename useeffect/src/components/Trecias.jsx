import React, { useState, useEffect } from "react";
import axios from "axios";

export const Trecias = () => {
  const [dataFromAPI, setDataFromAPI] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      const newArray = res.data.data.map((el) => ({ ...el, color: "black" }));
      setDataFromAPI(newArray);
    });
  }, []);

  const handleColor = () => {
    const copy = dataFromAPI.map((el) =>
      el.first_name === "Rachel" || el.first_name === "Tobias"
        ? { ...el, color: "red" }
        : el
    );
    setDataFromAPI(copy);
  };
  return (
    <div className="cardsContainer">
      <ul>
        {dataFromAPI?.map((el) => (
          <li key={el.id} style={{ color: el.color }}>
            {el.first_name} {el.last_name}
          </li>
        ))}
      </ul>
      <button onClick={handleColor}>Make Red</button>
    </div>
  );
};
