import axios from 'axios';

// get all

const API_URL = 'https://restcountries.com/v3.1/all';

const getAllCountriesData = async () => {
  try {
    const res = await axios.get(API_URL);
    if (res.data !== undefined) {
      console.log(res.data);
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export default getAllCountriesData;
