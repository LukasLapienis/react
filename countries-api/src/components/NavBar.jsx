import React from 'react';

export const NavBar = ({ regionFilterHandler }) => {
  const regions = [
    '',
    'Asia',
    'Europe',
    'Africa',
    'Oceania',
    'North America',
    'Antarctic',
    'South America',
  ];
  return (
    <div className="navBarContainer">
      {regions.map((region, i) => {
        return (
          <button key={i} onClick={() => regionFilterHandler(region)}>
            {region ? region : 'All'}
          </button>
        );
      })}
    </div>
  );
};
