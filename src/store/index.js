import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { createStore, applyMiddleware, compose } from 'redux';
import persistStore from 'redux-persist/es/persistStore';

import rootReducer from './rootReducer';

const ignoredActions = [];
const ignoredPaths = [];

const santilizedObject = '<<SANTILIZE_OBJECT>>';

const actionSantilize = (action) => {
  ignoredActions.includes(action.type)
    ? { ...action, params: { ...action.params, value: santilizedObject } }
    : action;
};

const stateSantilized = (state) => {
  const store = state.store || {};
  const newStore = { ...store };

  ignoredPaths
    .map((p) => p.split('.').pop())
    .forEach((key) => {
      newStore[key] = santilizedObject;
    });

  return {
    ...state,
    store: newStore,
  };
};

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        actionSantilize,
        stateSantilized,
      })
    : compose;

const reduxToolKitOption = {
  serializableCheck: false,
  immutableCheck: false,
};

const middlewares = [...getDefaultMiddleware(reduxToolKitOption)];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, enhancer);
export const persistor = persistStore(store);

window.addEventListener('beforeunload', () => {
  persistor.flush;
});
