import React, { useState } from 'react';

export const AnimalInput = ({ setAnimalsData }) => {
  const [name, setName] = useState('');
  const [group, setGroup] = useState('bird');
  const [weight, setWeight] = useState('');
  const [isInZoo, setIsInZoo] = useState('No');

  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const handleAnimalInput = (e) => {
    e.preventDefault();

    if (!name || !weight) {
      alert('Please fill all fields.');
      return;
    }

    setAnimalsData((prev) => [
      ...prev,
      {
        id: generateUniqueId(),
        name: name,
        group: group,
        weight: weight,
        isInZoo: isInZoo,
      },
    ]);
    setName('');
    setWeight('');
    setIsInZoo('No');
  };

  const handleNameInput = (e) => {
    setName(e.target.value.replace(/[^A-Za-z]/gi, ''));
  };

  const handleWeightInput = (e) => {
    setWeight(e.target.value);
  };

  const handleZooInput = () => {
    setIsInZoo(isInZoo === 'No' ? 'Yes' : 'No');
  };

  return (
    <div className="formContainer">
      <div className="form">
        <input
          type="text"
          value={name}
          onChange={handleNameInput}
          placeholder="Animal Name"
          className="nameInput"
        />
        <input
          type="number"
          placeholder="Weight"
          className="weightInput"
          value={weight}
          onChange={handleWeightInput}
        />
        <div className="isInZooInput">
          <label htmlFor="isInZooInput">Is In Zoo?</label>
          <input
            className="checkbox"
            type="checkbox"
            name="isInZooInput"
            onChange={handleZooInput}
            checked={isInZoo === 'Yes' ? true : false}
          />
        </div>
        <select
          onChange={(e) => setGroup(e.target.value)}
          value={group}
          className="groupSelect"
        >
          <option value="bird"> Bird </option>
          <option value="mammal"> Mammal </option>
          <option value="reptile"> Reptile </option>
          <option value="amphibian"> Amphibian </option>
          <option value="fish"> Fish </option>
        </select>

        <button onClick={handleAnimalInput}>Add Animal</button>
      </div>
    </div>
  );
};
