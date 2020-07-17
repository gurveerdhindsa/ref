/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import '../assets/css/main.less';

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <h1>React-Express-Firebase Boilerplate</h1>
          <p>Here is a picture of my dog</p>
          <img
            className="content-image--dog"
            src="images/dog.jpg"
            alt="happy dog"
          />
        </div>
      </div>
    );
  }
}
