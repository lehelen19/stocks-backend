const express = require('express');
const watchlistsController = require('../../controllers/api/watchlists');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

const router = express.Router();

// add ensureLoggedIn when not testing
router.get('/', watchlistsController.index);

router.get('/:id', watchlistsController.show);

router.post('/', watchlistsController.create);

router.post('/:id/stocks', watchlistsController.addStock);

router.post('/:id', watchlistsController.update);

router.delete('/:id/stocks', watchlistsController.deleteStock);

router.delete('/:id', watchlistsController.delete);

module.exports = router;
