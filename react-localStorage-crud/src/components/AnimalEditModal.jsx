import React from 'react';
import { useState } from 'react';

export const AnimalEditModal = ({
  animalsData,
  setAnimalsData,
  selectedAnimalId,
  setIsModalOpen,
}) => {
  const animal = animalsData.find((el) => el.id === selectedAnimalId);

  const [groupEdit, setGroupEdit] = useState(animal.group);
  const [isInZoo, setIsInZoo] = useState(animal.isInZoo);
  const [nameEdit, setNameEdit] = useState(animal.name);
  const [weightEdit, setWeightEdit] = useState(animal.weight);

  const handleEdit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setAnimalsData((prevAnimals) => {
      return prevAnimals.map((prevAnimal) => {
        if (prevAnimal.id === selectedAnimalId) {
          return {
            id: selectedAnimalId,
            name: nameEdit,
            group: groupEdit,
            weight: weightEdit,
            isInZoo: isInZoo,
          };
        }
        return prevAnimal;
      });
    });
    alert('updated');
  };

  const handleNameEdit = (e) => {
    setNameEdit(e.target.value.replace(/[^A-Za-z]/gi, ''));
  };

  const handleWeightEdit = (e) => {
    setWeightEdit(e.target.value);
  };

  const handleGroupEdit = (e) => {
    setGroupEdit(e.target.value);
  };

  const handleZooInputEdit = () => {
    setIsInZoo(isInZoo === 'Yes' ? 'No' : 'Yes');
  };

  const handleModalClose = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <div className="modal-overlay" onClick={handleModalClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <form className="modalForm">
          <div>
            <label htmlFor="nameEdit">Animal Name:</label>
            <input
              className="nameInput"
              type="text"
              value={nameEdit}
              name="nameEdit"
              onChange={handleNameEdit}
            />
          </div>
          <div>
            <label htmlFor="weightEdit">Animal Weight:</label>
            <input
              className="weightInput"
              type="number"
              value={weightEdit}
              name="weightEdit"
              onChange={handleWeightEdit}
            />
          </div>
          <div>
            <label htmlFor="isInZooInput">Is In Zoo?</label>
            <input
              className="checkbox"
              type="checkbox"
              name="isInZooInput"
              onChange={handleZooInputEdit}
              checked={isInZoo === 'Yes' ? true : false}
            />
          </div>
          <div>
            <select
              onChange={handleGroupEdit}
              value={groupEdit}
              className="groupSelect"
            >
              <option value="bird"> Bird </option>
              <option value="mammal"> Mammal </option>
              <option value="reptile"> Reptile </option>
              <option value="amphibian"> Amphibian </option>
              <option value="fish"> Fish </option>
            </select>
          </div>

          <button onClick={handleEdit}>Update</button>
          <button onClick={handleModalClose}>Close</button>
        </form>
      </div>
    </div>
  );
};
