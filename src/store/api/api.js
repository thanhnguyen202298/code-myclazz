/* eslint-disable import/prefer-default-export */
import fetch from 'isomorphic-fetch';

import { API_PATH, API_URL } from 'src/constants';
import { handleResponse, getOptions } from 'src/store/utilities';

export const getGroupsApi = (query, token) =>
  fetch(`${API_URL}${API_PATH}groups/?${query}`, {
    ...getOptions(token),
    method: 'get',
  }).then(handleResponse);

export const updateGroupApi = (groupId, params, token) =>
  fetch(`${API_URL}${API_PATH}groups/${groupId}`, {
    ...getOptions(token),
    method: 'put',
    body: JSON.stringify(params),
  }).then(handleResponse);

export const createGroupApi = (params, token) =>
  fetch(`${API_URL}${API_PATH}groups/`, {
    ...getOptions(token),
    method: 'post',
    body: JSON.stringify(params),
  }).then(handleResponse);
