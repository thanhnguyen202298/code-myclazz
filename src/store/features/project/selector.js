/* eslint-disable camelcase */
import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';

import { getProjectEntities } from 'src/store/entities/selector';
import { projectSchema } from 'src/store/normalizr/schema';
import { createDefaultProjectState } from 'src/store/utilities';

const defaultState = createDefaultProjectState();

const getStateData = (state) => state.project || defaultState;

export const getProjectIds = (state) => getStateData(state).projects;
export const getSavedProjectIds = (state) => getStateData(state).savedProjects;
export const getUnsavedProjectIds = (state) => getStateData(state).unsavedProjects;
export const getTotalProjects = (state) => getStateData(state).count;
export const getIsLoading = (state) => getStateData(state).loading;
export const getCurrentProjectId = (state) => getStateData(state).currentProject;

export const getSavedProjectsList = createSelector(
  [getProjectEntities, getSavedProjectIds],
  (projects, projectIds) =>
    denormalize(projectIds, [projectSchema], {
      projects,
    }),
);

export const getUnsavedProjectsList = createSelector(
  [getProjectEntities, getUnsavedProjectIds],
  (projects, projectIds) =>
    denormalize(projectIds, [projectSchema], {
      projects,
    }),
);

export const getCurrentProject = createSelector(
  [getProjectEntities, getCurrentProjectId],
  (projects, projectId) =>
    denormalize(projectId, projectSchema, {
      projects,
    }),
);
