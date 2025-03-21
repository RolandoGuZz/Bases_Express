const express = require('express')
const router = express.Router()
const jhomeontroller = require('../controllers/home_controller')
const homeController = require('../controllers/home_controller')


router.get('/', homeController.getHome);

router.post('/', homeController.addHome)

router.put('/', homeController.updateHome)

router.delete('/', homeController.deleteHome)

module.exports = router