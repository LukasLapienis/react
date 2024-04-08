import React from "react";

export const Animal = ({ animal, handleDelete, setShowId }) => {
  const { id, name, type, weight, isInZoo } = animal;
  return (
    <li>
      <span>id: {id} </span>
      <span>name: {name} </span>
      <span>type: {type} </span>
      <span>weight: {weight} </span>
      <span>isInZoo: {isInZoo === 1 ? "Yes" : "No"} </span>
      <div>
        <button onClick={() => setShowId(id)}>Edit</button>
        <button onClick={() => handleDelete(id)}>Remove</button>
      </div>
    </li>
  );
};
