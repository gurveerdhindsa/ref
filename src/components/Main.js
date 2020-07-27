/* eslint-disable react/prefer-stateless-function */
import React, { useEffect } from 'react';
import '../assets/css/main.less';

const Main = () => {
  useEffect(() => {
    fetch('/v1/test')
      .then((response) => response.text())
      .then((text) => console.log(text));
  });

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
};

export default Main;
