const Watchlist = require('../../models/Watchlist');

async function create(req, res) {
  try {
    const watchlist = await Watchlist.create(req.body);
    res.json(watchlist);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = { create };
