const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
require('./config/database');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(require('./config/checkToken'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/watchlists', require('./routes/api/watchlists'));
app.use('/api/stocks', requre('./routes/api/stocks'));

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express is listening on port ${port}!`);
});
