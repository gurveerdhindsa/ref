/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import '../assets/css/main.less';

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <h1>Welcome!</h1>
        <h4>React-Express-Firebase Boilerplate</h4>

        <div className="content">
          <p>Here is a picture of a dog</p>
          <img src="images/dog.jpg" alt="happy dog" />
        </div>
      </div>
    );
  }
}
