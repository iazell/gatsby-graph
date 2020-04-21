import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8001';
axios.defaults.headers.common = {
  Accept: 'application/json, application/xml, text/play, text/html, *.*',
  'Content-Type': 'application/json',
};

const AUTH_API_PATH = '/auth';

export const login = (payload) => axios.post(`${AUTH_API_PATH}/login`, payload).then(res => (res && res.data) ? res.data : undefined);
