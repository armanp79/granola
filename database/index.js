const { Client } = require('pg');

const client = new Client({
  user: 'root',
  host: 'localhost',
  database: 'granola',
  password: ''
});

client.connect();

module.exports = client;