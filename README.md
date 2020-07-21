<div style="text-align:center">
  <img width="100%" src="https://imgur.com/download/Y6hVgCa/" alt="Banner image" />
</div>

[![Build Status](https://travis-ci.com/gurveerdhindsa/ref.svg?token=Q7Wj8LGyEKmLYx5gvdog&branch=master)](https://travis-ci.com/gurveerdhindsa/ref)
[![Dependencies Status](https://img.shields.io/david/gurveerdhindsa/ref?color=success)](https://github.com/gurveerdhindsa/ref.git)
![GitHub package.json version](https://img.shields.io/github/package-json/v/gurveerdhindsa/ref)

> REF is a React-Express-Firebase project template (aka boilerplate) for building scalable, maintainable and performant web applications.

<br />

This boilerplate is perfect for beginner :baby: , intermediate :man: , and advanced developers :construction_worker: looking to quick-start a project that will yield a perfect [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) score!

<p align="center">
  <img width="60%" src="https://imgur.com/download/ZJXd8TU" alt="Lighthouse Score">
</p>

### Features

🔑 <b>React</b> - The key to scalability. Build self-documented code and create maintainable large applications.

☁️ <b>Serverless Architecture</b> - Combination of Firebase services (Firestore, Storage and Cloud Functions) backed by Google.

🧹 <b>Automatic Linting</b> - Focus on writing new features without worrying about formatting or code quality. Your code will be formatted and linted according to industry standard.

📦 <b>Packaged</b> - Bundle and transpile your code with ease, and have it ready to ship to any environment.

🔍 <b>SEO</b> - 100% SEO supported (document head tags management) for search engines that support indexing of JavaScript content.

<br />

### Tech Stack

- [React](https://reactjs.org/) - [🛠](https://stackshare.io/react) - [:octocat:](https://github.com/facebook/react) - JavaScript library for building user interfaces.
- [Node.js](https://nodejs.org/) - [🛠️](https://stackshare.io/nodejs) - [:octocat:](https://github.com/nodejs/node) - A JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express](https://expressjs.com/) - [🛠️](https://stackshare.io/expressjs) - [:octocat:](https://github.com/expressjs/express) - A minimal and flexible Node.js web application framework.
- [Firebase](https://firebase.google.com/) - [🛠️](https://stackshare.io/firebase) - A mobile and web application development platform.
  - Cloud Functions
  - Firestore
  - Storage
  - Hosting
- [Webpack](https://webpack.js.org/) - [🛠️](https://stackshare.io/webpack) - [:octocat:](https://github.com/webpack/webpack) - A static module bundler for modern JavaScript applications.
- [Babel](https://babeljs.io/) - [🛠️](https://stackshare.io/babel) - [:octocat:](https://github.com/babel/babel) - A JavaScript compiler
- [Prettier](https://prettier.io/) - [🛠️](https://stackshare.io/prettier) - [:octocat:](https://github.com/prettier/prettier) - An opinionated code formatter.
- [Cypress](https://www.cypress.io/) - [🛠️](https://stackshare.io/cypress) - [:octocat:](https://github.com/cypress-io/cypress) - A JavaScript End to End Testing Framework

<br />

### Directory Layout

```bash
├── build/                        # Compiled output
├── node_modules/                 # 3rd-party libraries and utilities
├── public/                       # Static files such as favicon.ico, robots.txt etc.
├── cypress/                      # Cypress e2e tests
├── server/                       # Server code (aka firebase functions)
│   ├── .eslintignore               # ESLint ignored directories and files
│   ├── .eslintrc.json              # ESLint configuration
│   ├── .snyk                       # Snyk configuration
│   ├── index.js                    # Server code entry point
├── src/                          # Application source code
│   ├── assets/                     # Application assets (css, images, fonts, etc.)
│   ├── components/                 # React Components
│   ├── utils/                      # Additional utilities
│   ├── index.js                    # Client code entry point
│   ├── package.json                # The list of project dependencies + NPM scripts
├── .babelrc                      # Babel configuration
├── .browserslistrc               # Targeted browsers
├── cypress.json                  # E2E testing configuration
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

<br />

### Getting Started

#### Installation

```bash
$ git clone https://github.com/gurveerdhindsa/ref.git MyApp
$ cd MyApp
$ npm install                      # Installs client dependencies
$ cd server
$ npm install                      # Installs sever dependencies
```

#### Firebase setup

First, create a [project](https://firebase.google.com/docs/web/setup)

Then, update your local environment:

```bash
$ cd MyApp
$ touch .env                       # Create a local environment file in the root directory

# Paste your firebase project configuration in the .env file as such:
API_KEY: "XXXXXXXX"
AUTH_DOMAIN: "XXXXXXXX.firebaseapp.com"
DATABASE_URL: "https://XXXXXXXX.firebaseio.com"
PROJECT_ID: "XXXXXXXX"
STORAGE_BUCKET: "XXXXXXXX.appspot.com"
MESSAGING_SENDER_ID: "XXXXXXXX"
APP_ID: "XXXXXXXX"
MEASUREMENT_ID: "XXXXXXXX"
```

#### Scripts

```bash
$ npm start                       # Runs client code with live-reload
$ npm run build                   # Compile a production build
$ npm run lint                    # Prettify and lint project files
$ npm run server                  # Runs server code with live-reload
$ npm run deploy-client           # Compile a production build & deploy client code to Firebase
$ npm run deploy-server           # Deploy server code to Firebase
$ npm run test:cypress            # Execute e2e tests
```

<br />
<div style="text-align:center">
  <h3 align="center"><i>Feel free to fork this repo and create a workflow to your own liking!</i></h3>
</div>
