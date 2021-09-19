import { createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import { setPageStack } from './action';

const persistConfig = {
  storage,
  key: 'pageFlow',
  stateReconciler: autoMergeLevel2,
  blacklist: ['loading'],
  version: 1,
};

const defaultState = {
  stack: [],
};

const pageFlow = createReducer(defaultState, (builder) => {
  builder
    .addCase('CLEAR_STACK', () => defaultState)
    .addCase(setPageStack, (state, { payload }) => {
      state.stack.push(payload.pageName);
    });
});

export default persistReducer(persistConfig, pageFlow);
