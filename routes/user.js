const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.render('users/home_user', {titulo: "Hola usuario"});
})

router.post('/', (req, res) => {
    res.send('post users')
})

router.put('/', (req, res) => {
    res.send('put users')
})

router.delete('/', (req, res) => {
    res.send('delete users')
})

module.exports = router