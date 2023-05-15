const express = require('express');
const stocksController = require('../../controllers/api/stocks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

const router = express.Router();

// Add ensureLoggedIn once frontend complete
router.get('/:symbol', stocksController.show);

module.exports = router;
