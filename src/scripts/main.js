import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import style from '../styles/App.scss';
import Main from './containers/App'

injectTapEventPlugin();
export const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider >
      <div className="main">
        <Router history={history}>
          <Route path='/' component={Main} />
        </Router>
      </div>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

