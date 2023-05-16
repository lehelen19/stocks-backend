const express = require('express');
const watchlistsController = require('../../controllers/api/watchlists');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

const router = express.Router();

router.get('/', ensureLoggedIn, watchlistsController.index);

router.get('/:id', ensureLoggedIn, watchlistsController.show);

router.post('/', ensureLoggedIn, watchlistsController.create);

router.post('/:id/stocks', ensureLoggedIn, watchlistsController.addStock);

router.post('/:id', ensureLoggedIn, watchlistsController.update);

router.delete('/:id/stocks', ensureLoggedIn, watchlistsController.deleteStock);

router.delete('/:id', ensureLoggedIn, watchlistsController.delete);

module.exports = router;
