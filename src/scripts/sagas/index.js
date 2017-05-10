import { fork } from 'redux-saga/effects'

import {
    watchSignupRequest,
} from './signup'

export default function* sagas() {
  yield [
    // sign up Sagas
    fork(watchSignupRequest),

  ]
}
