const express = require('express');
const watchlistsController = require('../../controllers/api/watchlists');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

const router = express.Router();

router.post('/', ensureLoggedIn, watchlistsController.create);

module.exports = router;
