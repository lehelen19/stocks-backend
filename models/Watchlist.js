const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const watchlistSchema = new Schema({
  name: { type: String, required: true },
  stocks: [String],
});

module.exports = mongoose.model('Watchlist', watchlistSchema);
