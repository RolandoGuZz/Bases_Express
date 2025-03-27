const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home_controller')


router.get('/', homeController.getHome)

router.get('/:id(\\d+)', homeController.getById)

router.post('/', homeController.addHome)

router.put('/', homeController.updateHome)

router.delete('/', homeController.deleteHome)

module.exports = router