import React, { useState } from 'react';

export const AnimalInput = ({ handleAnimals }) => {
  const [animals, setAnimals] = useState([]);
  const [name, setName] = useState('');
  const [group, setGroup] = useState('bird');
  const [weight, setWeight] = useState('');
  const [isInZoo, setIsInZoo] = useState('');

  const handleAnimalInput = () => {
    setAnimals((prev) => [
      ...prev,
      { name: name, group: group, weight: weight, isInZoo: isInZoo },
    ]);
    setName('');
    setWeight('');
    setIsInZoo(false);
    handleAnimals(animals);
  };

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleWeightInput = (e) => {
    setWeight(e.target.value);
  };

  const handleZooInput = () => {
    setIsInZoo((prev) => !prev);
  };

  return (
    <div className="container">
      <h2>Zoo Manager {isInZoo}</h2>

      <div>
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
        <select
          onChange={(e) => setGroup(e.target.value)}
          value={group}
          className="groupSelect"
        >
          <option value="blue"> Blue </option>
          <option value="green"> Green </option>
          <option value="red"> Red </option>
        </select>
        <div>
          <label htmlFor="isInZooInput">Is In Zoo?</label>
          <input
            type="checkbox"
            name="isInZooInput"
            onChange={handleZooInput}
          />
        </div>

        <button onClick={handleAnimalInput}>Add Animal</button>
      </div>
    </div>
  );
};
