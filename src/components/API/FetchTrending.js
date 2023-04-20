import axios from 'axios';

const ENDPOINT = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=88faaf442f455e4d8446047507fe6e6c';

export async function fetchTrending() {
  const URL = `${ENDPOINT}trending/all/day?${API_KEY}`;
  const response = await axios.get(URL);

  return response.data.results;
}
