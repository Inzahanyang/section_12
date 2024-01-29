import axios from "axios";

export const fetchCountries = async () => {
  try {
    const response = await axios.get("https://naras-api.vercel.app/all");
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchSearchQueries = async (search) => {
  try {
    const response = await axios.get(
      `https://naras-api.vercel.app/search?q=${search}`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchCode = async (code) => {
  try {
    const response = await axios.get(
      `https://naras-api.vercel.app/code/${code}`
    );
    return response.data;
  } catch (e) {
    console.log(e.response.data);
  }
};
