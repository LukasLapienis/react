import React, { useState, useEffect } from 'react';

export const AnimalInput = () => {
  const [animals, setAnimals] = useState([]);
  const [name, setName] = useState('');
  const [group, setGroup] = useState('bird');
  const [weight, setWeight] = useState('');
  const [isInZoo, setIsInZoo] = useState('No');

  useEffect(() => {
    const storedAnimals = JSON.parse(localStorage.getItem('animals'));
    if (storedAnimals) {
      setAnimals(storedAnimals);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('animals', JSON.stringify(animals));
  }, [animals]);

  const handleAnimalInput = (e) => {
    e.preventDefault();

    if (!name || !weight) {
      alert('Please fill all fields.');
      return;
    }

    setAnimals((prev) => [
      ...prev,
      { name: name, group: group, weight: weight, isInZoo: isInZoo },
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
