import { call, put, takeEvery } from 'redux-saga/effects'
import { api } from '../utils/apiHelper' //api handler
import { push } from 'react-router-redux';

function* signUp(action) {
  let p = action.payload; // Shortcut for payload
  console.log('SIGNING UP');
  console.dir(p);
  const request = {
    endpoint: 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth',
    method: 'POST',
    payload: {
      name: p.name,
      email: p.email,
    }
  }
  try {
    let response = yield call(api, request);
    console.dir(response)
    // On signup success, do the following tasks in parallel
    yield [
      put({type: 'SIGNUP_SUCCESS'}),
    ]
  } catch (e) {
    console.dir(e)
    // On signup error, display error to user.
    yield put({type: 'SIGNUP_FAILURE', payload: {message: e.data}})
  }
}

export function* watchSignupRequest() {
  yield takeEvery("SIGNUP_REQUEST", signUp);
}
