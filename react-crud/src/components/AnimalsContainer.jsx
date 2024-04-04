import React, { useState, useEffect } from 'react';
import { AnimalDisplay } from './AnimalDisplay';
import { AnimalInput } from './AnimalInput';

export const AnimalsContainer = () => {
  const [animalsData, setAnimalsData] = useState(() => {
    const animalsFromLs = localStorage.getItem('animals');
    const storedAnimals = JSON.parse(animalsFromLs);
    return storedAnimals || [];
  });

  const [name, setName] = useState('');
  const [group, setGroup] = useState('bird');
  const [weight, setWeight] = useState('');
  const [isInZoo, setIsInZoo] = useState('No');

  useEffect(() => {
    localStorage.setItem('animals', JSON.stringify(animalsData));
  }, [animalsData]);

  return (
    <div>
      <AnimalInput
        animalsData={animalsData}
        setAnimalsData={setAnimalsData}
        name={name}
        setName={setName}
        group={group}
        setGroup={setGroup}
        weight={weight}
        setWeight={setWeight}
        isInZoo={isInZoo}
        setIsInZoo={setIsInZoo}
      />
      <AnimalDisplay
        animalsData={animalsData}
        setAnimalsData={setAnimalsData}
      />
    </div>
  );
};
