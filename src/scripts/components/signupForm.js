import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';

const required = value => value == null ? 'Required' : undefined
const min_length = 3;
const name = value => value.length < min_length ? 'Minimum ' + min_length + ' characters' : undefined;
const email = value => value &&
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : undefined
const matchingValidation = values => {
  const errors = {};
  if(values.email && values.confirmEmail
    && values.email !== values.confirmEmail) {
      errors.confirmEmail = 'Emails must match';
  }
  return errors;
}


const styles= {
  field:{
    width: "90%",
    fontSize: "35px",
    border: "1px solid black",
    margin: "8px",
    paddingLeft: "8px",
    paddingRight: "8px",

  },
  input: {
    width: "100%",
    lineHeight: "40px",
    fontSize: "40px",
  },
  error: {
    fontSize: "20px",
    lineHeight: "32px",
  },
  button:{
    width: "90%",
    lineHeight: "40px",
    height:"40px",
    marginTop:"40px",
  },
  buttonLabel:{
    lineHeight: "40px",
    height:"40px",
    fontSize:36
  }
}

class SignupForm extends Component {

  componentWillMount() {
    this.props.dispatch({
      type: 'SIGNUP'
    });
  }

  register = (e, values) => {
    e.preventDefault();
    this.props.dispatch({
      type: 'SIGNUP_REQUEST',
      payload: {
        name: this.refs.name.value,
        email: this.refs.email.value
      }
    })
  }

  render() {
    const { pristine, submitting } = this.props;
    return (
      <div>
      {
        !this.props.success ?
        <div className="form">
          <div className="title">
            Request an invite
          </div>
          <div className="hr" />
          <div className="message">
            You will be one of the first to experience <br />
            Broccoli & Co. when we launch.
            <RaisedButton
              type='submit'
              primary={true}
              backgroundColor="#4dc581"
              style={styles.button}
              labelStyle={styles.buttonLabel}
              onClick={this.props.onClose}
              label="Ok"
            />
          </div>
        </div>
        :
        <form onSubmit={this.register.bind(this)} className="form">
          <div className="title">
            Request an invite
          </div>
          <div className="hr" />
          <div>
            <Field
              name="name"
              component={TextField}
              type="text"
              hintText="Full name"
              style={styles.field}
              inputStyle={styles.input}
              underlineShow={false}
              errorStyle={styles.error}
              validate={[required, name]}
              ref="name"
              withRef
            />
          </div>
          <div>
            <Field
              name="email"
              component={TextField}
              type="text"
              hintText="Email"
              validate={[required, email]}
              style={styles.field}
              inputStyle={styles.input}
              underlineShow={false}
              errorStyle={styles.error}
              ref="email"
              withRef
            />
          </div>
          <div>
            <Field
              name="confirmEmail"
              component={TextField}
              type="text"
              hintText="Confirm Email"
              validate={[required, email]}
              style={styles.field}
              inputStyle={styles.input}
              underlineShow={false}
              errorStyle={styles.error}
              ref="confirmEmail"
              withRef
            />
          </div>
          <RaisedButton
            ref='submit'
            type='submit'
            primary={true}
            backgroundColor="#4dc581"
            style={styles.button}
            labelStyle={styles.buttonLabel}
            disabled={pristine || submitting}
            label={this.props.pending ? 'Sending, please wait...' : 'Send'}
          />
          {this.props.status ?
            <div className="error">
              {this.props.status}
            </div>
          : null
          }
        </form>
      }
      </div>

    );
  }
}

// Decorate the form component
SignupForm = reduxForm({
  form: 'signup-form',
  fields: [ 'name', 'email', 'confirmEmail' ],
  validate: matchingValidation
})(SignupForm);

const mapStateToProps = (state) => ({
  status: state.broccoliApp.signup.error,
  pending: state.broccoliApp.signup.pending,
  success: state.broccoliApp.signup.signedUp
});


export default connect(mapStateToProps)(SignupForm)
