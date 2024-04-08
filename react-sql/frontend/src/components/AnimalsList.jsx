import React, { useState } from "react";
import { Animal } from "./Animal";

export const AnimalsList = ({ animalList, handleDelete }) => {
  const [showId, setShowId] = useState("");

  return (
    <div className="animalList">
      {animalList === "undefined" ? (
        <div>Loading...</div>
      ) : (
        animalList.map((animal) => {
          return (
            <Animal
              key={animal.id}
              animal={animal}
              handleDelete={handleDelete}
              setShowId={setShowId}
              showId={showId}
            />
          );
        })
      )}
    </div>
  );
};
