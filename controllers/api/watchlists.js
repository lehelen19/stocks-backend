const Watchlist = require('../../models/Watchlist');

async function create(req, res) {
  try {
    const watchlist = await Watchlist.create(req.body);
    res.json(watchlist);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function update(req, res) {
  try {
    const watchlist = await Watchlist.findById(req.params.id);
    watchlist.stocks.push(req.body.stock);
    await watchlist.save();
    res.json(watchlist);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = { create, update };
