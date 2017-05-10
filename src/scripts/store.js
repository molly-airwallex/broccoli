import throttle from 'lodash/throttle';
import clone from 'lodash/clone';

import { browserHistory } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'

import createSagaMiddleware from 'redux-saga'

import broccoliApp from './reducers/reducers'
import {reducer as formReducer} from 'redux-form';

import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const loadState = () => {
  // Get the state from localStorage if it exists and is JSON.
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined
  }
};


const saveState = (state) => {
  // Save the provided state JSON into localStorage.
  try {
    // console.dir('saving state')
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};


const configureStore = () => {
  // Configure the store with thunk middleware for async dispatch, auth
  // middleware for controlling location in state.

  const middlewares = [
    routerMiddleware(browserHistory),
    // thunk,
    sagaMiddleware
  ]

  const enhancers = compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
      window.LogRocket ? window.LogRocket.reduxEnhancer() : f => f,
    )

  const store = createStore(
    combineReducers({
      broccoliApp,
      routing: routerReducer,
      form: formReducer,
    }),
    loadState(),
    enhancers
  );

  store.subscribe(throttle(() => {
    // TODO explicityly save the state we want, dont delete items we dont want.
    var tempState = clone(store.getState().broccoliApp);

    saveState(
      {'broccoliApp' : tempState}
    );
  }, 1000));


  sagaMiddleware.run(sagas)

  return store
}


export default configureStore;
