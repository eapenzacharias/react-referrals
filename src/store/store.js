import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { combineReducers } from 'redux';
import usersReducer from './users';

const rootReducer = combineReducers({
  usersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;
