const homeService = require('../services/home_services')

const homeController = {
    getHome: (req, res) => {
        const data = homeService.getDataHome()
        return res.render('home/index', { titulo: "Bienvenidos a mi sitio ", productos: data })
    },

    addHome: (req, res) => {
        res.send('AddHome controller')
    },

    updateHome: (req, res) => {
        res.send('UpdateHome controller')
    },

    deleteHome: (req, res) => {
        res.send('DeleteHome controller')
    }
}

module.exports = homeController;