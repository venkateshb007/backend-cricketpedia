module.exports = {
    HASH_SECRET: process.env.HASH_SECRET || 'default-hash-secret',
    HASH_LENGTH: process.env.HASH_LENGTH || 8,
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    MONGO_URI: process.env.MONGO_URI || ''
  };
  