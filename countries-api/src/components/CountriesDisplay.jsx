import React, { useState } from 'react';
import { CountryModal } from './CountryModal';

export const CountriesDisplay = ({ filteredCountries }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCountryName, setSelectedCountryName] = useState('');

  const modalHandler = (name) => {
    setIsModalOpen(true);
    setSelectedCountryName(name);
  };
  return (
    <div className="cardsContainer">
      {filteredCountries.map((country) => {
        return (
          <div className="card" key={country.name.common}>
            <img alt={country.flags.alt} src={country.flags.png} />
            <h3>{country.name.common}</h3>
            <p>Continent: {country.continents}</p>
            <p>Capital: {country.capital}</p>
            <button onClick={() => modalHandler(country.name.common)}>
              More
            </button>
            {isModalOpen && (
              <CountryModal
                setIsModalOpen={setIsModalOpen}
                selectedCountryName={selectedCountryName}
                filteredCountries={filteredCountries}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
