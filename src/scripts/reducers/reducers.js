import { combineReducers } from 'redux';
import signup from './signupReducer';

const appReducer = combineReducers({
  signup
})

const broccoliApp = (state, action) => {
  return appReducer(state, action)
}


export default broccoliApp
