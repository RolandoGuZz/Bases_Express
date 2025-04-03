const express = require('express')
const homer = require('./home')
const userr = require('./user')
const bookr = require('./book')
const router = express.Router()

router.use('/', homer)
router.use('/users', userr)
router.use('/libros', bookr)

module.exports = router