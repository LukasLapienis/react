import './App.css';
import { CountriesDisplay } from './components/CountriesDisplay';
import getAllCountriesData from './services/countriesService';
import { useState } from 'react';

function App() {
  const [allCountries, setAllCountries] = useState(() => getAllCountriesData());
  const regions = [
    'asia',
    'europe',
    'africa',
    'oceania',
    'northamerica',
    'antarctica',
    'southamerica',
  ];
  return (
    <div className="App">
      <CountriesDisplay allCountries={allCountries} />
    </div>
  );
}

export default App;
