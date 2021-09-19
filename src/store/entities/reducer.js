import { createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  storage,
  key: 'entities',
  stateReconciler: autoMergeLevel2,
};

const defaultState = {
  dxf_files: {},
  devices: {},
  projects: {},
  groups: {},
};

const actions = new Set([
  // action to save data storage
  // fetchGroups.fulfilled.toString(),
 
]);

const ENTITY_MAPPING = Object.freeze({});

const renameEntity = ([entityName, entity]) => {
  const newName = ENTITY_MAPPING[entityName] || entityName;
  return [newName, entity];
};

const entities = createReducer(defaultState, (builder) => {
  builder
    .addCase('CLEAR_REDUCER_DATA1', () => defaultState)
    .addCase('CLEAR_REDUCER_ALL_DATA', () => defaultState)

    .addMatcher(
      (action) => actions.has(action.type),
      (state, { payload }) => {
        if (!payload.entities) {
          return;
        }

        Object.entries(payload.entities)
          .map(renameEntity)
          .forEach(([entityName, entity]) => {
            state[entityName] = state[entityName] || {};
            const entityState = state[entityName];

            Object.entries(entity).forEach(([id, model]) => {
              entityState[id] = entityState[id] || {};
              Object.assign(entityState[id], model);
            });
          });
      },
    );
});

export default persistReducer(persistConfig, entities);
