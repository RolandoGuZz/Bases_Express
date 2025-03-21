const express = require('express')
const homer = require('./home')
const userr = require('./user')
const router = express.Router()

router.use('/', homer)
router.use('/users', userr)

module.exports = router