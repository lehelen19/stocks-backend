const express = require('express');
const stocksController = require('../../controllers/api/stocks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

const router = express.Router();

router.get('/:symbol', ensureLoggedIn, stocksController.show);

module.exports = router;
