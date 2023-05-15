const Watchlist = require('../../models/Watchlist');

async function index(req, res) {
  try {
    const watchlists = await Watchlist.find({});
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
    // USE WHEN FRONTEND IS DONE
    // const user = await User.find({ username: req.user.username });
    // req.body.user = user._id;
    req.body.user = '64627008a38891a0afa7ff47';
    console.log(req.body);
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
    watchlist.stocks.push(req.body.stock);
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
