import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

const styles = {
  heart: {
    color: 'red',
  }
};

export class Footer extends Component {


  render() {

    return (
      <div className="footer">
        <div>
          Made with <FontAwesome name='heart' style={styles.heart} /> in Melbourne.
        </div>
        <div>
          <FontAwesome name='copyright' /> Broccoli & Co. All rights reserved.
        </div>
      </div>
    )
  }
}

export default Footer
