import React, { useState, useEffect } from 'react';
import { AnimalDisplay } from './AnimalDisplay';
import { AnimalInput } from './AnimalInput';

export const AnimalsContainer = () => {
  const [animalsData, setAnimalsData] = useState(() => {
    const animalsFromLs = localStorage.getItem('animals');
    const storedAnimals = JSON.parse(animalsFromLs);
    return storedAnimals || [];
  });

  useEffect(() => {
    localStorage.setItem('animals', JSON.stringify(animalsData));
  }, [animalsData]);

  return (
    <div className="container">
      <h2>Zoo Manager</h2>
      <AnimalInput setAnimalsData={setAnimalsData} />
      {animalsData.length === 0 ? (
        <div className="NoData">
          {' '}
          <h3>No Animals Found</h3>{' '}
        </div>
      ) : (
        <AnimalDisplay
          animalsData={animalsData}
          setAnimalsData={setAnimalsData}
        />
      )}
    </div>
  );
};
