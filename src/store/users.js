import axios from 'axios';
import initialState from './initialState';

const SIGN_IN = 'auth/signin';

const url = 'https://rails-referrals.herokuapp.com/api/auth/';

export const signIn = (user) => async (dispatch) => {
  const currentState = JSON.parse(JSON.stringify(initialState));
  console.log(user);
  const headers = {
    'Content-Type': 'application/json',
  };
  axios
    .post(`${url}sign_in`, user, { headers })
    .then((response) => {
      currentState.currentUser.isSignedIn = true;
      currentState.currentUser.attributes = response.data.data;
      currentState.currentUser.headers = response.headers;
      console.log('Signed In', currentState.currentUser.headers);
      dispatch({
        type: SIGN_IN,
        payload: currentState,
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
    default:
      return state;
  }
};

export default reducer;
