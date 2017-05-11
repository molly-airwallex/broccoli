import React from 'react'
import {mount, shallow, render} from 'enzyme'
import { expect } from 'chai'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import SignupForm from './signupForm';
import Dialog from 'material-ui/Dialog';
import sinon from 'sinon';

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

describe('Signupform Enzyme Tests', () => {
  it('Signupform calls componentDidMount', () => {
    sinon.spy(SignupForm.prototype, 'componentDidMount');
    const wrapper = mount(
      <Provider store={store}>
        <MuiThemeProvider>
          <SignupForm />
        </MuiThemeProvider>
      </Provider>
    );
    expect(SignupForm.prototype.componentDidMount.calledOnce).to.equal(true);
  })

  it('Signupform has the right title', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MuiThemeProvider>
          <SignupForm bar="baz"/>
        </MuiThemeProvider>
      </Provider>
    );
    expect(wrapper.text()).to.contain("Request an invite");
  })


})