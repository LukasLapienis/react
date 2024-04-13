import React from 'react';

export const CountryModal = ({
  setIsModalOpen,
  filteredCountries,
  selectedCountryName,
}) => {
  const country = filteredCountries.find(
    (country) => country.name.common === selectedCountryName
  );

  const firstKey = Object.keys(country.languages)[0];
  const firstValue = country.languages[firstKey];

  const modalCloseHandler = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };
  return (
    <div className="modal-overlay" onClick={modalCloseHandler}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={country.flags.png} alt={country.flags.alt} />
        <h3>{country.name.common}</h3>
        <p>Capital: {country.capital}</p>
        <p>Region: {country.region}</p>
        <p>Population: {country.population}</p>
        <p>Area: {country.area}</p>
        <p>Language: {firstValue}</p>
      </div>
    </div>
  );
};
