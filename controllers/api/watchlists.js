const Watchlist = require('../../models/Watchlist');
const User = require('../../models/User');

async function index(req, res) {
  try {
    const user = await User.find({ username: req.user.username });
    const watchlists = await Watchlist.find({ user: user[0]._id });
    res.json(watchlists);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function show(req, res) {
  try {
    const watchlist = await Watchlist.findById(req.params.id);
    res.json(watchlist);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function create(req, res) {
  try {
    const user = await User.find({ username: req.user.username });
    req.body.user = [user[0]._id];
    const watchlist = await Watchlist.create(req.body);
    res.json(watchlist);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function update(req, res) {
  try {
    const watchlist = await Watchlist.findById(req.params.id);
    watchlist.name = req.body.name;
    await watchlist.save();
    res.json(watchlist);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteWatchlist(req, res) {
  try {
    await Watchlist.findByIdAndDelete(req.params.id);
    res.json('Deleted watchlist');
  } catch (err) {
    res.status(400).json(err);
  }
}

async function addStock(req, res) {
  try {
    const watchlist = await Watchlist.findById(req.params.id);
    const stock = req.body.stock;
    if (watchlist.stocks.includes(stock)) {
      throw new Error('Stock is already in watchlist.');
    }
    watchlist.stocks.push(stock);
    await watchlist.save();
    res.json(watchlist);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteStock(req, res) {
  try {
    const watchlist = await Watchlist.findById(req.params.id);
    const foundIndex = watchlist.indexOf(req.body.stock);
    watchlist.splice(foundIndex, 1);
    await watchlist.save();
    res.json(watchlist);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  index,
  show,
  create,
  update,
  delete: deleteWatchlist,
  addStock,
  deleteStock,
};
