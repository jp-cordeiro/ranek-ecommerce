import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export default {
  get(endpont) {
    return api.get(endpont);
  },
};
