import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';
import { Signup } from '../components/signup.js';

export class Main extends Component {

  render() {
    return (
      <div className="main">
        <div className="main">
          <Header />
          <div className="content">
            <Signup/>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(Main);
