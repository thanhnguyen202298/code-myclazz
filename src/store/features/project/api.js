/* eslint-disable import/prefer-default-export */
import fetch from 'isomorphic-fetch';

import { API_PATH, API_URL } from 'src/constants';
import { handleResponse, getOptions } from 'src/store/utilities';

export const getProjectsApi = (query, token) =>
  fetch(`${API_URL}${API_PATH}projects/?${query}`, {
    ...getOptions(token),
    method: 'get',
  }).then(handleResponse);
