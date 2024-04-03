import React, { useState, useEffect } from 'react';

export const AnimalDisplay = () => {
  const [animals, setAnimals] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [sortDirection, setSortDirection] = useState('ascending');

  useEffect(() => {
    const animalsFromLs = localStorage.getItem('animals');
    const parsedAnimals = animalsFromLs ? JSON.parse(animalsFromLs) : [];
    setAnimals(parsedAnimals);
  }, [animals]);

  const handleEdit = (id) => {
    setAnimals();
  };

  const handleDelete = (id) => {
    setAnimals();
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

  return (
    <div className="cardsContainer">
      <table>
        <thead>
          <tr>
            <td onClick={() => handleSortBy('name')}>
              Name{' '}
              <i
                className={
                  sortDirection === 'ascending'
                    ? 'fa fa-arrow-circle-down'
                    : 'fa fa-arrow-circle-up'
                }
              ></i>
            </td>
            <td onClick={() => handleSortBy('weight')}>
              Weight{' '}
              <i
                className={
                  sortDirection === 'ascending'
                    ? 'fa fa-arrow-circle-down'
                    : 'fa fa-arrow-circle-up'
                }
              ></i>
            </td>
            <td onClick={() => handleSortBy('group')}>
              Group{' '}
              <i
                className={
                  sortDirection === 'ascending'
                    ? 'fa fa-arrow-circle-down'
                    : 'fa fa-arrow-circle-up'
                }
              ></i>
            </td>
            <td onClick={() => handleSortBy('isInZoo')}>
              Is In Zoo?{' '}
              <i
                className={
                  sortDirection === 'ascending'
                    ? 'fa fa-arrow-circle-down'
                    : 'fa fa-arrow-circle-up'
                }
              ></i>
            </td>
            <td onClick={() => handleEdit()}>Edit</td>
            <td onClick={() => handleDelete()}>Delete</td>
          </tr>
        </thead>
        <tbody>
          {animals &&
            animals
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
              .map((animal, index) => (
                <tr key={index} className="card">
                  <td>{animal.name}</td>
                  <td>{animal.weight}</td>
                  <td>{animal.group}</td>
                  <td>{animal.isInZoo}</td>
                  <td>
                    <button>Edit</button>
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};
