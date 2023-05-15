const express = require('express');
const watchlistsController = require('../../controllers/api/watchlists');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

const router = express.Router();

// add ensureLoggedIn when not testing
router.post('/', watchlistsController.create);

module.exports = router;
