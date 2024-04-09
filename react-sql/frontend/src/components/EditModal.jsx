import React, { useState } from 'react';

export const EditModal = ({ showId, setIsModalOpen, animalList, setEdit }) => {
  const animal = animalList.find((animal) => animal.id === showId);

  const [name, setName] = useState(animal.name);
  const [type, setType] = useState(animal.type);
  const [weight, setWeight] = useState(animal.weight);
  const [isInZoo, setIsInZoo] = useState(animal.isInZoo);

  const handleNameEdit = (e) => {
    setName(e.target.value);
  };
  const handleTypeEdit = (e) => {
    setType(e.target.value);
  };
  const handleWeightEdit = (e) => {
    setWeight(e.target.value);
  };
  const handleIsInZooEdit = (e) => {
    setIsInZoo(isInZoo === 1 ? 0 : 1);
  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setEdit({ name, type, weight, isInZoo, showId });
    alert('Updated');
    setIsModalOpen(false);
  };

  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <form className="modalForm">
          <div>
            <label htmlFor="nameEdit">Animal Name:</label>
            <input
              className="nameInput"
              type="text"
              value={name}
              name="nameEdit"
              onChange={handleNameEdit}
            />
          </div>
          <div>
            <label htmlFor="typeEdit">Animal Type:</label>
            <input
              className="typeInput"
              type="text"
              value={type}
              name="typeEdit"
              onChange={handleTypeEdit}
            />
          </div>
          <div>
            <label htmlFor="weightEdit">Animal Weight:</label>
            <input
              className="weightInput"
              type="number"
              value={weight}
              name="weightEdit"
              onChange={handleWeightEdit}
            />
          </div>
          <div>
            <label htmlFor="isInZooInput">Is In Zoo?</label>
            <input
              className="IsInZooCheckbox"
              type="checkbox"
              name="isInZooInput"
              onChange={handleIsInZooEdit}
              checked={isInZoo === 1 ? true : false}
            />
          </div>

          <button onClick={() => handleEditSubmit}>Update</button>
          <button onClick={() => handleCloseModal}>Close</button>
        </form>
      </div>
    </div>
  );
};
