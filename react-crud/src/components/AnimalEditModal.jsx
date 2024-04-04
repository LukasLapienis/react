import React from 'react';
import { useState } from 'react';

export const AnimalEditModal = ({
  animalsData,
  setAnimalsData,
  animalId,
  setIsOpen,
}) => {
  const animal = animalsData.find((el) => el.id === animalId);
  console.log(animal);

  const [groupEdit, setGroupEdit] = useState(animal.group);
  const [isInZoo, setIsInZoo] = useState(animal.isInZoo);
  const [nameEdit, setNameEdit] = useState(animal.name);

  const handleEdit = () => {
    setAnimalsData();
    setIsOpen(false);
  };

  const handleNameEdit = () => {
    // setNameEdit(animalsData.map(animal) => animal.id === animalId ? );
  };

  const handleZooInputEdit = () => {
    setIsInZoo(isInZoo === 'Yes' ? 'No' : 'Yes');
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="modal-overlay">
      <div
        className="modal"
        style={{ backgroundColor: 'cyan', height: '200px', width: '200px' }}
      >
        <form>
          <label htmlFor="nameEdit">Animal Name:</label>
          <input
            type="text"
            value={animal.name}
            name="nameEdit"
            onChange={handleNameEdit}
          />
          <label htmlFor="weightEdit">Animal Weight:</label>
          <input type="number" value={animal.weight} />
          <select
            onChange={(e) => setGroupEdit(e.target.value)}
            value={groupEdit}
            className="groupSelectEdit"
          >
            <option value="bird"> Bird </option>
            <option value="mammal"> Mammal </option>
            <option value="reptile"> Reptile </option>
            <option value="amphibian"> Amphibian </option>
            <option value="fish"> Fish </option>
          </select>
          <label htmlFor="isInZooInput">Is In Zoo?</label>
          <input
            type="checkbox"
            name="isInZooInput"
            onChange={handleZooInputEdit}
            checked={isInZoo === 'Yes' ? true : false}
          />
          <button onClick={handleEdit}>Update</button>
          <button onClick={handleModalClose}>Close</button>
        </form>
      </div>
    </div>
  );
};
