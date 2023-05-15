const crypto = require('crypto');
const config = require('./config');
const mongoose = require('mongoose');

// Optional: Connect to MongoDB database
if (config.MONGO_URI) {
  mongoose.connect(config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'Database connection error:'));
}

const urlSchema = new mongoose.Schema({
  hash: String,
  originalURL: String
});

const URLModel = mongoose.model('URL', urlSchema);

async function getOriginalURL(hash) {
  const url = await URLModel.findOne({ hash });
  return url ? url.originalURL : null;
}

function hashURL(url) {
  const { HASH_SECRET, HASH_LENGTH } = config;
  const hash = crypto
    .createHmac('sha256', HASH_SECRET)
    .update(url)
    .digest('hex')
    .substring(0, HASH_LENGTH);
  return hash;
}

module.exports = {
  hashURL,
  getOriginalURL
};
