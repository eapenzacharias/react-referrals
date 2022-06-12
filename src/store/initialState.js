const initialState = {
  currentUser: {
    isSignedIn: false,
    isSignedUp: false,
    attributes: {
      id: null,
      email: null,
      name: null,
      uid: null,
    },
    headers: {
      'access-token': null,
      'token-type': 'Bearer',
      client: null,
      expiry: null,
      uid: null,
    },
  },
};

export default initialState;
