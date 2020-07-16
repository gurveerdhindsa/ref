const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

const app = express();
app.use(helmet());
app.use(morgan('combined'));
app.use(cors({ origin: true }));
app.use(express.json());

// Example GET w/ database query
app.get('/v1/image', async (req, res) => {
  const imageRef = db.collection('images').doc('smiley-face');
  const doc = await imageRef.get();

  if (!doc.exists) {
    console.log('Image doc not found!');
  } else {
    res.json({ image: doc.data() });
  }
});

const api = functions.https.onRequest(app);

module.exports = {
  api,
};
