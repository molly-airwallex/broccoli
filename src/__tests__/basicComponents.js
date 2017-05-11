import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';


import Header from '../scripts/components/header';
import Footer from '../scripts/components/footer';
import SignupForm from '../scripts/components/signupForm';
import Signup from '../scripts/components/signup';


injectTapEventPlugin();
const store = createStore(() => ({
  broccoliApp : {
    signup: {
      signedUp: false,
      signingUp: false,
      pending: false,
      error: false
    }
  }
}));

test('Header component', () => {
  const component = renderer.create(
    <MuiThemeProvider>
      <Header />
    </MuiThemeProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Footer component', () => {
  const component = renderer.create(
    <Footer />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('SignupForm component', () => {
  const component = renderer.create(
    <Provider store={store}>
      <MuiThemeProvider>
        <SignupForm />
      </MuiThemeProvider>
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Signup component', () => {
  const component = renderer.create(
      <MuiThemeProvider>
        <Signup />
      </MuiThemeProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});