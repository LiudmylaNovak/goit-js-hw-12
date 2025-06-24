import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '51031758-22da015b5c422b982caea10cf';
const PER_PAGE = 15;

export const getImagesByQuery = async (query, page = 1) => {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: PER_PAGE,
  };

  try {
    const response = await axios.get(URL, { params });
    return response.data;
  } catch (error) {
    throw new Error('Oops! Something went wrong. Please try again later.');
  }
};
