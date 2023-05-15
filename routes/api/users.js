const express = require('express');
const usersController = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

const router = express.Router();

router.get('/check-token', ensureLoggedIn, usersController.checkToken);

router.post('/', usersController.create);

router.post('/login', usersController.login);

module.exports = router;
