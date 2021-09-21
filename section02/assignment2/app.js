const path = require('path');

const express = require('express');

const app = express();

const users = require('./routes/users');
const main = require('./routes/main');

app.use(express.static(path.join(__dirname, 'public')));

app.use(users);
app.use(main);

app.listen(3000);
