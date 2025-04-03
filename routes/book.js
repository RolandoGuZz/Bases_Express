const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book_controller');

router.post('/', bookController.addBook);

module.exports = router;