const initialState = {
  signedUp: false,
  signingUp: false,
  pending: false,
  error: false,
}


function createReducer(initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];
    return reducer
      ? reducer(state, action.payload)
      : state;
  };
}


export default createReducer(initialState, {
  'SIGNUP': (state, payload) => {
    return Object.assign({}, state, initialState);
  },
  'SIGNUP_REQUEST': (state, payload) => {
    return Object.assign({}, state, {
      pending: true,
      error: false,
    });
  },
  'SIGNUP_SUCCESS': (state, payload) => {
    return Object.assign({}, state, {
      signedUp: true,
      pending: false,
      error: false,
    });
  },
  'SIGNUP_FAILURE': (state, payload) => {
    console.dir(payload);
    return Object.assign({}, state, {
      signedUp: false,
      pending: false,
      error: payload.message.errorMessage,
    });
  },
});
