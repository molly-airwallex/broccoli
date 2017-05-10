import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar'

const styles = {
  headingBar: {
    width: '100%',
    height: 64,
    minHeight: 64,
    backgroundColor: '#4dc581', //light green
    paddingLeft:'15%',
    paddingRight: '15%',
  }
};

export class Header extends Component {

  render() {

    return (
       <AppBar
        title="BROCCOLI & CO."
        style={styles.headingBar}
        showMenuIconButton={false}
      />
    )
  }
}

export default Header
