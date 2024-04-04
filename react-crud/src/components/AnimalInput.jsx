import React, { useState, useEffect } from 'react';

export const AnimalInput = ({ animalsData, setAnimalsData }) => {
  const [animals, setAnimals] = useState(animalsData);
  const [name, setName] = useState('');
  const [group, setGroup] = useState('bird');
  const [weight, setWeight] = useState('');
  const [isInZoo, setIsInZoo] = useState('No');

  useEffect(() => {
    localStorage.setItem('animals', JSON.stringify(animals));
  }, [animals]);

  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const handleAnimalInput = (e) => {
    e.preventDefault();

    if (!name || !weight) {
      alert('Please fill all fields.');
      return;
    }

    setAnimals((prev) => [
      ...prev,
      {
        id: generateUniqueId(),
        name: name,
        group: group,
        weight: weight,
        isInZoo: isInZoo,
      },
    ]);

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
    setName(e.target.value);
  };

  const handleWeightInput = (e) => {
    setWeight(e.target.value);
  };

  const handleZooInput = () => {
    setIsInZoo(isInZoo === 'No' ? 'Yes' : 'No');
  };

  return (
    <div className="formContainer">
      <h2>Zoo Manager</h2>

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
          <option value="bird"> Bird </option>
          <option value="mammal"> Mammal </option>
          <option value="reptile"> Reptile </option>
          <option value="amphibian"> Amphibian </option>
          <option value="fish"> Fish </option>
        </select>
        <div>
          <label htmlFor="isInZooInput">Is In Zoo?</label>
          <input
            type="checkbox"
            name="isInZooInput"
            onChange={handleZooInput}
            checked={isInZoo === 'Yes' ? true : false}
          />
        </div>

        <button onClick={handleAnimalInput}>Add Animal</button>
      </div>
    </div>
  );
};
