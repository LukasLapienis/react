import React, { useState } from 'react';

const CreateAnimal = ({ setCreate }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [weight, setWeight] = useState('');
  const [isInZoo, setIsInZoo] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !type || !weight) {
      alert('please fill all fields');
      return;
    }

    setCreate({ name, type, weight, isInZoo });

    setName('');
    setType('');
    setWeight('');
    setIsInZoo(0);
  };

  return (
    <div className="createAnimalContainer">
      <h1>Create animal record</h1>

      <form className="form" onSubmit={handleFormSubmit}>
        <div>
          <label>Animal name: </label>
          <input
            className="nameInput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Animal type: </label>
          <input
            className="typeInput"
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div>
          <label>Animal weight: </label>
          <input
            className="weightInput"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label>Does animal live in LT ZOO? </label>
          <input
            className="isInZooInput"
            type="checkbox"
            checked={isInZoo}
            onChange={() => setIsInZoo((doLive) => (doLive ? 0 : 1))}
          />
        </div>

        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateAnimal;
