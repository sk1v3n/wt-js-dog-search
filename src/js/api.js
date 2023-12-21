import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_9NqJWyhv68K6Azgdsjm19xhGO5WSHnyyhM5mjZkEPF3VFPO2nZOZTGF2raywpHmh';

export async function fetchBreeds() {
  return await axios
    .get('https://api.thedogapi.com/v1/breeds')
    .then(response => response.data);
}

export async function fetchDogByBreed(breedId) {
  return await axios
    .get(`https://api.thedogapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data);
}