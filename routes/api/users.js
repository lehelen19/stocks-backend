const express = require('express');
const usersController = require('../../controllers/api/users');

const router = express.Router();

router.post('/', usersController.create);

module.exports = router;
