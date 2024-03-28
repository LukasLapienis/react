import React, { useState, useEffect } from "react";
import axios from "axios";
import { PirmoModal } from "./PirmoModal";

export const Pirmas = () => {
  const [dataFromAPI, setDataFromAPI] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState(0);

  const handleModal = (id) => {
    setIsOpen(true);
    setUserId(id);
  };

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((res) => setDataFromAPI(res.data.data));
  }, []);
  return (
    <div className="cardsContainer">
      {dataFromAPI &&
        dataFromAPI.map((data) => (
          <div
            key={data.id}
            className="card"
            onClick={() => handleModal(data.id)}
          >
            <p>{data.email}</p>
            <p>{data.first_name}</p>
            <p>{data.last_name}</p>
            <img className="cardImg" src={data.avatar} alt="avatar" />
          </div>
        ))}
      {isOpen && (
        <PirmoModal
          dataFromAPI={dataFromAPI}
          userId={userId}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};
