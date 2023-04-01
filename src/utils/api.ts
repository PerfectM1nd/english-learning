import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS',
  'Cache-Control': 's-maxage=10'
};

const instance = axios.create({
  baseURL: '/api',
  headers,
  timeout: 20000
});

export default instance;
