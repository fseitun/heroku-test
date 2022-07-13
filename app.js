const express = require('express');
const app = express();

const router = require('./routes');

const port = process.env.PORT || 3000;

app.use('/', router);

app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = app;
