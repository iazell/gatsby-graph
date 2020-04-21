import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8001';

const USER_API_PATH = '/user';

export const getUserInfo = (accessToken) => {
  axios.defaults.headers.common = {
    Accept: 'application/json, application/xml, text/play, text/html, *.*',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };
  return axios.get(USER_API_PATH).then(res => (res && res.data) ? res.data : undefined);
};
