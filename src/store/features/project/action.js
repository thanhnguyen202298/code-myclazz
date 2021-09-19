import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { normalize } from 'normalizr';
import qs from 'qs';

import { getProjectsApi } from './api'
import { projectSchema } from 'src/store/normalizr/schema';

const getAuthToken=()=>{};

export const fetchProjects = createAsyncThunk(
  'FETCH_PROJECTS_LIST',
  async ({ params }, thunkApi) => {
    const token = getAuthToken(thunkApi.getState());
    const query = qs.stringify(params, { arrayFormat: 'brackets' });
    const response = await getProjectsApi(query, token);
    return normalize(response, [projectSchema]);
  },
);

export const setActiveProject = createAction('PROJECT_VIEW', ({ projectId }) => ({
  payload: { projectId },
}));
