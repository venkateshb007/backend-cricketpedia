const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const dotenv = require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const generateHash = (str) => {
  const hash = crypto.createHash('sha256');
  hash.update(str.toString());
  return hash.digest('hex').slice(0, 16);
};

app.get('/', (req, res) => {
  res.send('Welcome to URL shortener!');
});

app.get('/:id', (req, res) => {
  const id = req.params.id;
  // TODO: Retrieve the original URL associated with this ID from the database
  // and redirect to it using res.redirect()
});

app.post('/api/shorten', (req, res) => {
  const url = req.body.url;
  const id = generateHash(url);
  const shortUrl = `${process.env.BASE_URL}/${id}`;
  // TODO: Save the mapping between the ID and the original URL in the database
  res.status(201).json({ message: 'Shortened URL created successfully', shortUrl });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
