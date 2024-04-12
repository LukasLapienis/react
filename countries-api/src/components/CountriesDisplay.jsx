import React from 'react';

export const CountriesDisplay = ({ countriesData }) => {
  return (
    <div className="displayContainer">
      {countriesData?.map((country) => {
        return <div>{console.log(country)} 1</div>;
      })}
    </div>
  );
};
