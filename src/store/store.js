import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { combineReducers } from 'redux';
import usersReducer from './users';
import referralReducer from './referrals';

const rootReducer = combineReducers({
  usersReducer,
  referralReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;
