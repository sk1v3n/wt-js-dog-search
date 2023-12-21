import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_afRIOe5gZduJtosJ092XHqZqlIU5zmrMEep6dQgwSmhxX0QlUuQOqkKtvts5lpm6';

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