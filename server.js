const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log(`Express is listening on port ${port}!`);
});
