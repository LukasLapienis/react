import React, { useState, useEffect } from 'react';
import { AnimalDisplay } from './AnimalDisplay';
import { AnimalInput } from './AnimalInput';

export const AnimalsContainer = () => {
  const [animalsData, setAnimalsData] = useState(() => {
    const animalsFromLs = localStorage.getItem('animals');
    const storedAnimals = JSON.parse(animalsFromLs);
    return storedAnimals || [];
  });
  const [sortBy, setSortBy] = useState('name');
  const [sortDirection, setSortDirection] = useState('ascending');
  const [isOpen, setIsOpen] = useState(false);
  const [animalId, setAnimalId] = useState('');

  useEffect(() => {
    localStorage.setItem('animals', JSON.stringify(animalsData));
    console.log(animalsData);
  }, [animalsData]);

  return (
    <div>
      <AnimalInput animalsData={animalsData} setAnimalsData={setAnimalsData} />
      <AnimalDisplay
        animalsData={animalsData}
        setAnimalsData={setAnimalsData}
      />
    </div>
  );
};
