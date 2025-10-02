import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '52403123-1f76d15efcce2ed4cd464589c';
const per_page = 15;

export async function getImagesByQuery(query, page = 1) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page,
    },
  });
  return response.data;
}
