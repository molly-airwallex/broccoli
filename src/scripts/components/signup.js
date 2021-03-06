import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import SignUpForm from './signupForm';


const styles = {
  customContentStyle: {
    width: '70%'
  },
  button: {
    background: "#4dc581",
    label: "#FFFFFF"
  }
}

export class Signup extends Component {

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
      <div className="Aligner">
        <div className="title">
          A better way
        </div>
        <div className="title">
          to enjoy every  day.
        </div>
        <div className="subtitle">
          Be the first to know
        </div>
        <RaisedButton
          label="Request an invite"
          backgroundColor={styles.button.background}
          labelColor={styles.button.label}
          onClick={this.handleOpen} />
        <Dialog
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={styles.customContentStyle}
        >
          <SignUpForm onClose={this.handleClose}/>
        </Dialog>
      </div>
    );
  }
}

export default Signup