import axios from "axios";
const BASE_URl = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    // regionCode: 'US',
    maxResults: '50',
    // order: 'date'
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URl}/${url}`, options);
  return data;
};
