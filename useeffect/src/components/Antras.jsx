import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Antras = () => {
  const [dataFromAPI, setDataFromAPI] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    axios.get('https://reqres.in/api/users?delay=3').then((res) => {
      setDataFromAPI(res.data.data);
      setIsloading(false);
    });
  }, []);
  return (
    <div className="cardsContainer">
      {isLoading ? (
        <span className="loader"></span>
      ) : (
        dataFromAPI &&
        dataFromAPI.map((data) => (
          <div key={data.id} className="card">
            <p>{data.email}</p>
            <p>{data.first_name}</p>
            <p>{data.last_name}</p>
            <img className="cardImg" src={data.avatar} alt="avatar" />
          </div>
        ))
      )}
    </div>
  );
};
