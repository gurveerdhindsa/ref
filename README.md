[![Build Status](https://travis-ci.com/gurveerdhindsa/ref.svg?token=Q7Wj8LGyEKmLYx5gvdog&branch=master)](https://travis-ci.com/gurveerdhindsa/ref)
[![Dependencies Status](https://img.shields.io/david/gurveerdhindsa/ref?color=success)](https://github.com/gurveerdhindsa/ref.git)

<div style="text-align:center">
  <h1 align="center">React Express Firebase Boilerplate</h1>
  
</div>

<p align="center">
  <img width="60%" src="https://imgur.com/download/ZJXd8TU" alt="Lighthouse Score">
</p>

> REF is a React-Express-Firebase project template (aka boilerplate) for building scalable, maintainable and performant web applications.

This boilerplate is perfect for beginner :baby: , intermediate :man: , and advanced developers :construction_worker: looking to quick-start a project that will yield a perfect [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) score!

### Tech Stack
* React
* Node.js
  * Express
* Firebase & GCP
  * Cloud Firestore
  * Storage
  * Hosting

### Directory Layout

```bash
├── build/                        # Compiled output
├── node_modules/                 # 3rd-party libraries and utilities
├── public/                       # Static files such as favicon.ico, robots.txt etc.
├── server/                       # Server code (aka firebase functions)
│   ├── .eslintignore             # ESLint ignored directories and files
│   ├── .eslintrc.json            # ESLint configuration
│   ├── .snyk                     # Snyk configuration
│   ├── index.js                  # Server code entry point
├── src/                          # Application source code
│   ├── assets/                     # Application assets (css, images, fonts, etc.)
│   ├── components/                 # React Components
│   ├── utils/                      # Additional utilities
│   ├── index.js                    # Client code entry point
│   ├── package.json                # The list of project dependencies + NPM scripts
├── .babelrc                      # Babel configuration
├── .browserslistrc               # Targeted browsers
├── .eslintignore                 # ESLint ignored directories and files
├── .eslintrc.json                # ESLint configuration
├── .firebaserc                   # Project aliases
├── .prettierignore               # Prettier ignored directories and files
├── .prettierrc                   # Prettier configuration
├── .travis.yml                   # TravisCI configuration
├── firebase.json                 # Firebase configuration
├── firestore.indexes.json        # Manage Firestore indexes
├── firestore.rules               # Firebase database security rules
├── postcss.config.js             # Postcss configuration
├── storage.rules                 # Firebase storage security rules
├── webpack.common.js             # Webpack configuration used in both dev & prod
├── webpack.dev.js                # Webpack configuration used ONLY in dev
├── webpack.prod.js               # Webpack configuration used ONLY in prod
└── package.json                  # The list of project dependencies + NPM scripts
```