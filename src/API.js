import axios from 'axios';

const AUTH_TOKEN = '31382006-33462af27eddcc8e16dd10c21';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export default async function fetchImagesAPI(searchQuery, page) {
  const options = new URLSearchParams({
    key: `${AUTH_TOKEN}`,
    q: `${searchQuery}`,
    page: `${page}`,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: '12',
  });

  return axios.get(`?${options}`).then(resp => {
    if (resp.status === 200) {
      return resp.data;
    }
    return Promise.reject(new Error('RESPONCE NOT OK!'));
  });
}
