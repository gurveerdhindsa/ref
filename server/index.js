const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const functions = require('firebase-functions');

const app = express();
app.use(helmet());
app.use(morgan('combined'));
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/v1/test', (req, res) => {
  res.send('Called /v1/test');
});

const api = functions.https.onRequest(app);

module.exports = {
  api,
};
