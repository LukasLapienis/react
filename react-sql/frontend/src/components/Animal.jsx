import React from 'react';

export const Animal = ({ animal, handleDelete, setShowId, setIsModalOpen }) => {
  const { id, name, type, weight, isInZoo } = animal;

  const handleEdit = (id) => {
    setShowId(id);
    setIsModalOpen(true);
  };

  return (
    <li>
      <span>id: {id} </span>
      <span>name: {name} </span>
      <span>type: {type} </span>
      <span>weight: {weight} </span>
      <span>isInZoo: {isInZoo === 1 ? 'Yes' : 'No'} </span>
      <div>
        <button onClick={() => handleEdit(id)}>Edit</button>
        <button onClick={() => handleDelete(id)}>Remove</button>
      </div>
    </li>
  );
};
