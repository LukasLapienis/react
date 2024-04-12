import React from 'react';

export const CountriesDisplay = ({ countries }) => {
  return (
    <div className="cardsContainer">
      {countries.map((country, i) => {
        return (
          <div className="card" key={i}>
            <img alt={country.flags.alt} src={country.flags.png} />
            <h3>{country.name.common}</h3>
            <p>Continent: {country.continents}</p>
            <p>Capital: {country.capital}</p>
            <button>More</button>
          </div>
        );
      })}
    </div>
  );
};
