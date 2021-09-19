/* eslint-disable camelcase */
import { createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import { fetchProjects, setActiveProject } from './action';
import { createDefaultProjectState } from 'src/store/utilities';

const persistConfig = {
  storage,
  key: 'project',
  stateReconciler: autoMergeLevel2,
  blacklist: ['loading'],
  version: 2,
};

const defaultState = createDefaultProjectState();

const project = createReducer(defaultState, (builder) => {
  builder
    .addCase('CLEAR_REDUCER_DATA', () => defaultState)
    .addCase('CLEAR_REDUCER_ALL_DATA', () => defaultState)
    .addCase(fetchProjects.fulfilled, (state, { payload, meta }) => {
      const { result } = payload;
      const { arg } = meta;
      const { params } = arg;
      if (params.is_active) {
        state.savedProjects = result;
      } else {
        state.unsavedProjects = result;
      }
      state.projects = result;
      state.count = state.projects.length;
      state.loading = false;
    })
    .addCase(fetchProjects.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchProjects.rejected, (state) => {
      state.loading = false;
    })
    .addCase(setActiveProject, (state, { payload }) => {
      state.currentProject = payload.projectId;
    });
});

export default persistReducer(persistConfig, project);
