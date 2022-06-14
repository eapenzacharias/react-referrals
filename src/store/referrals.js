import axios from 'axios';

const SEND_INVITE = 'sendInvite';
const GET_REFERRALS = 'referrals';

const url = 'https://rails-referrals.herokuapp.com/api/';
// const url = 'http://localhost:3000/api/';

export const sendInvite = (email, user) => async (dispatch) => {
  const currentState = [];
  const { headers } = user;
  axios
    .post(`${url}send_invite`, email, { headers })
    .then((response) => {
      currentState.sendInvite = response.message;
      dispatch({
        type: SEND_INVITE,
        payload: currentState,
      });
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
};

export const getReferrals = (user) => async (dispatch) => {
  const currentState = {};
  const { headers } = user;
  axios.get(`${url}referrals`, { headers })
    .then((response) => {
      currentState.referrals = response.data.data;
      currentState.count = response.data.count;
      dispatch({
        type: GET_REFERRALS,
        payload: currentState,
      });
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case SEND_INVITE:
      return action.payload;
    case GET_REFERRALS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
