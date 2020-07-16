/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Content from './Content';
import '../assets/css/main.less';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <Content />
      </div>
    );
  }
}
