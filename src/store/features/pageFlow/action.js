/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { normalize } from 'normalizr';

export const setPageStack = createAction('SET_PAGE_STACK', ({ pageName }) => ({
  payload: { pageName },
}));
