import axios from 'axios';
import initialState from './initialState';

const SIGN_IN = 'auth/signin';
const SIGN_UP = 'auth/signup';
const SIGN_OUT = 'auth/signout';

const url = 'https://rails-referrals.herokuapp.com/api/';
// const url = 'http://localhost:3000/api/';

export const signIn = (user) => async (dispatch) => {
  const currentState = JSON.parse(JSON.stringify(initialState));
  const headers = {
    'Content-Type': 'application/json',
  };
  axios
    .post(`${url}auth/sign_in`, user, { headers })
    .then((response) => {
      currentState.currentUser.isSignedIn = true;
      currentState.currentUser.attributes = response.data.data;
      currentState.currentUser.headers = response.headers;
      dispatch({
        type: SIGN_IN,
        payload: currentState,
      });
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
};

export const signUp = (user) => async (dispatch) => {
  const currentState = JSON.parse(JSON.stringify(initialState));
  const headers = {
    'Content-Type': 'application/json',
  };
  axios
    .post(`${url}auth`, user, { headers })
    .then((response) => {
      currentState.currentUser.isSignedIn = false;
      currentState.currentUser.isSignedUp = true;
      currentState.currentUser.attributes = response.data.data;
      currentState.currentUser.headers = response.headers;
      dispatch({
        type: SIGN_UP,
        payload: currentState,
      });
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
};

export const signOut = (user) => async (dispatch) => {
  const { headers } = user;
  axios
    .delete(`${url}auth/sign_out`, { headers })
    .then(() => {
      dispatch({
        type: SIGN_OUT,
        payload: initialState,
      });
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return action.payload;
    case SIGN_UP:
      return action.payload;
    case SIGN_OUT:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
