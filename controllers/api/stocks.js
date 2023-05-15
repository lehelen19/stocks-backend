const axios = require('axios');

async function show(req, res) {
  try {
    const URL = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${req.params.symbol}&apikey=${process.env.API_KEY}`;

    const apiRes = await axios(URL);
    if (apiRes.status === 200) {
      res.json(apiRes.data);
    }
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = { show };
