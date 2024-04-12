import axios from 'axios';

// get all

// const region = 'https://restcountries.com/v3.1/region/southame';

const getAllCountriesData = async () => {
  const API_URL = 'https://restcountries.com/v3.1/all';
  try {
    const res = await axios.get(API_URL);
    if (res.data !== undefined) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export default getAllCountriesData;
