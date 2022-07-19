const express = require('express');
const app = express();
require('dotenv').config();

const connectDB = require('./database/connect');
const router = require('./routes');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', router);

connectToDb();
app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = app;

async function connectToDb() {
  try {
    console.log('connecting to db');
    await connectDB(process.env.MONGO_URI);
    console.log('connected to db');
  } catch (error) {
    console.log('connection error', error);
  }
}
