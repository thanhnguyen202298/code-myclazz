import axios from 'axios';

const REQUEST_TIMEOUT = 30000;

const baseURL = 'https://demo3869875.mockable.io/master_copy.json';

export const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: REQUEST_TIMEOUT,
});

export const uploadClient = axios.create({
  baseURL,
  headers: {
    Accept: 'multipart/form-data',
    'Content-Type': 'multipart/form-data',
  },
  processData: false,
  contentType: false,
  timeout: REQUEST_TIMEOUT,
});

export const setAccessToken = (t) => {
  axiosClient.defaults.headers.common.Authorization = `Bearer ${t}`;
  axiosClient.defaults.headers.common['X-CSRF-TOKEN'] = t;

  uploadClient.defaults.headers.common.Authorization = `Bearer ${t}`;
  uploadClient.defaults.headers.common['X-CSRF-TOKEN'] = t;
};
