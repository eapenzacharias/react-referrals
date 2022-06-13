import axios from 'axios';

const SEND_INVITE = 'sendInvite';

// const url = 'https://rails-referrals.herokuapp.com/api/';
const url = 'http://localhost:3000/api/';

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

const reducer = (state = [], action) => {
  switch (action.type) {
    case SEND_INVITE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
