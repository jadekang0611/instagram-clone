import axios from 'axios';

export default axios.create({
  // uncomment for testing with local api
  // baseURL: 'http://localhost:8000',
  baseURL: 'https://thawing-ridge-16532.herokuapp.com',
});
