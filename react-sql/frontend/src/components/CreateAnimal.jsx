import React, { useState } from "react";

const CreateAnimal = ({ setCreate }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");
  const [isInZoo, setIsInZoo] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setCreate({ name, type, weight, isInZoo });

    console.log(name, type, weight, isInZoo);
    setName("");
    setType("");
    setWeight("");
    setIsInZoo(0);
  };

  return (
    <div>
      <h1>Create animal record</h1>

      <form onSubmit={handleFormSubmit}>
        <label>Animal name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Animal type</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />

        <label>Animal weight</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          type="checkbox"
          checked={isInZoo}
          onChange={() => setIsInZoo((doLive) => (doLive ? 0 : 1))}
        />
        <label>Does animal live in LT ZOO?</label>

        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateAnimal;
