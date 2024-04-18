import "./App.css";
import { CountriesDisplay } from "./components/CountriesDisplay";
import { useState, useEffect } from "react";
import getAllCountriesData from "./services/countriesService";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [regionFiltered, setRegionFiltered] = useState(null);
  const [searchFiltered, setSearchFiltered] = useState("");

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

  const regionFilterHandler = (region) => {
    const filtered = allCountries.filter((country) =>
      country.continents[0].includes(region)
    );
    setRegionFiltered(filtered);
    setFilteredCountries(filtered);
  };

  const searchFilterHandler = (e) => {
    setSearchFiltered(e.target.value);
    const filtered = (regionFiltered ? regionFiltered : allCountries).filter(
      (country) =>
        country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilteredCountries(filtered);
  };

  return (
    <div className="App">
      <Header
        regionFilterHandler={regionFilterHandler}
        searchFilterHandler={searchFilterHandler}
        searchFiltered={searchFiltered}
      />
      <CountriesDisplay filteredCountries={filteredCountries} />
      <Footer />
    </div>
  );
}

export default App;
