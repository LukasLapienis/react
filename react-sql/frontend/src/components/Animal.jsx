import React from "react";

export const Animal = ({ animal, handleDelete, setIsModalOpen, setEditId }) => {
  const { id, name, type, weight, isInZoo } = animal;

  const handleEdit = (id) => {
    setEditId(id);
    setIsModalOpen(true);
  };

  return (
    <li className="card">
      <span>name: {name} </span>
      <span>type: {type} </span>
      <span>weight: {weight} </span>
      <span>isInZoo: {isInZoo === 1 ? "Yes" : "No"} </span>
      <span>
        <button onClick={() => handleEdit(id)}>Edit</button>
      </span>
      <span>
        <button onClick={() => handleDelete(id)}>Remove</button>
      </span>
    </li>
  );
};
