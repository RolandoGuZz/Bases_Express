const homeService = require('../services/home_services')

const homeController = {
    getHome: async (req, res) => {
        try {
            const resp = await homeService.getDataHome();
            console.log(resp.data)
            if (!resp.msg) {
                return res.render('home/index', { titulo: "Bienvenidos a mi sitio ", clientes: resp.data });
            }
            return res.render('404Error', { titulo: 'Error', error: resp.msg });
        } catch (error) {
            return res.render('404Error', { titulo: 'Error', error: resp.msg });
        }
    },

    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const resp = await homeService.getUserById(id);
            return res.render('home/show', {titulo: 'Show user', clientes: resp.data})
        } catch (error) {
            return res.render('404Error', { titulo: 'Error', error: "hubo" });
        }
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