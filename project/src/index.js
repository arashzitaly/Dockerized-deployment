const express = require('express');
const basicAuth = require('express-basic-auth');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => res.send('Hello, world!'));

app.get(
  '/secret',
  basicAuth({
    users: { [process.env.USERNAME]: process.env.PASSWORD },
    challenge: true,
  }),
  (req, res) => res.send(process.env.SECRET_MESSAGE)
);

app.listen(3000, () => console.log('Listening on port 3000'));