import './App.css';
import { CountriesDisplay } from './components/CountriesDisplay';
import { useState, useEffect } from 'react';
import getAllCountriesData from './services/countriesService';
import { Header } from './components/Header';

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchFilter, setSearchFilter] = useState('all');
  const [filter, setFilter] = useState('all');
  const regions = [
    'asia',
    'europe',
    'africa',
    'oceania',
    'northamerica',
    'antarctica',
    'southamerica',
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCountriesData();
        setAllCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const searchFilterHandler = (e) => {
    setSearchFilter(e.target.value);
    const filtered = allCountries.filter((country) =>
      country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  return (
    <div className="App">
      <Header searchFilterHandler={searchFilterHandler} />
      <CountriesDisplay
        countries={filteredCountries}
        searchFilter={searchFilter}
      />
    </div>
  );
}

export default App;
