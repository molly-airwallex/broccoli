import React from 'react'
import Main from '../scripts/containers/App'
import {mount, shallow} from 'enzyme'
import { expect } from 'chai'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Signup from '../scripts/components/signup';
import SignupForm from '../scripts/components/signupForm';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {sinon}  from 'sinon';

injectTapEventPlugin();

describe('Signup Enzyme Tests', () => {

  it('Signup contains Dialog', () => {
    const wrapper = shallow(<Signup />)
    expect(wrapper.find(Dialog)).to.have.length(1);
  })

  it('Signup contains SignupForm', () => {
    const wrapper = shallow(<Signup />)
    expect(wrapper.find(SignupForm)).to.have.length(1);
  })

  it('Signup contains right text', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.text()).to.contain('A better way');
  });

})