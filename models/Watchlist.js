const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const watchlistSchema = new Schema({
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  name: { type: String, required: true },
  stocks: [String],
});

module.exports = mongoose.model('Watchlist', watchlistSchema);
