import axios from 'axios';

// get all

const API_URL = 'https://restcountries.com/v3.1/all';
// const region = 'https://restcountries.com/v3.1/region/southame';

const getAllCountriesData = async () => {
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
