import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000,
  //headers: {'User-Agent': 'purchase-list-app'}
});