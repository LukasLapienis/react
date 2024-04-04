import React, { useState } from 'react';
import { AnimalEditModal } from './AnimalEditModal';

export const AnimalDisplay = ({ animalsData, setAnimalsData }) => {
  const [sortBy, setSortBy] = useState('name');
  const [sortDirection, setSortDirection] = useState('ascending');
  const [isOpen, setIsOpen] = useState(false);
  const [animalId, setAnimalId] = useState('');

  const handleEditModal = (id) => {
    setIsOpen(true);
    setAnimalId(id);
  };

  const handleDelete = (id) => {
    const updatedAnimals = animalsData.filter((animal) => animal.id !== id);
    setAnimalsData(updatedAnimals);
  };

  const handleSortBy = (sort) => {
    if (sort === sortBy) {
      setSortDirection(
        sortDirection === 'ascending' ? 'descending' : 'ascending'
      );
    } else {
      setSortDirection('ascending');
      setSortBy(sort);
    }
  };

  const sortingArrow = (
    <i
      className={
        sortDirection === 'ascending'
          ? 'fa fa-arrow-circle-down'
          : 'fa fa-arrow-circle-up'
      }
    ></i>
  );

  return (
    <div className="cardsContainer">
      <table className="displayTable">
        <thead>
          <tr>
            <td onClick={() => handleSortBy('name')}>Name {sortingArrow}</td>
            <td onClick={() => handleSortBy('weight')}>
              Weight {sortingArrow}
            </td>
            <td onClick={() => handleSortBy('group')}>Group {sortingArrow}</td>
            <td onClick={() => handleSortBy('isInZoo')}>
              Is In Zoo? {sortingArrow}
            </td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {animalsData &&
            animalsData
              .sort((a, b) => {
                let aValue = a[sortBy];
                let bValue = b[sortBy];

                if (sortBy === 'weight') {
                  aValue = parseFloat(aValue);
                  bValue = parseFloat(bValue);
                } else {
                  aValue = aValue.toLowerCase();
                  bValue = bValue.toLowerCase();
                }
                if (sortDirection === 'ascending') {
                  return aValue > bValue ? 1 : -1;
                } else {
                  return aValue < bValue ? 1 : -1;
                }
              })
              .map((animal) => (
                <tr key={animal.id} className="card">
                  <td>{animal.name}</td>
                  <td>{animal.weight}</td>
                  <td>{animal.group}</td>
                  <td>{animal.isInZoo}</td>
                  <td>
                    <button onClick={() => handleEditModal(animal.id)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(animal.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
      {isOpen && (
        <AnimalEditModal
          animalsData={animalsData}
          animalId={animalId}
          setIsOpen={setIsOpen}
          setAnimalsData={setAnimalsData}
        />
      )}
    </div>
  );
};
