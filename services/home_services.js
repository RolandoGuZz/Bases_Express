const Cliente = require('../models/clientes')

const homeService = {
    getDataHome: async () => {
        try {
            const data = await Cliente.findAll();
            return { msg: null, data };
        } catch (error) {
            return { msg: error, data: [] };
        }

    },

    getUserById: async (id) => {
        try {
            const clientes = await Cliente.findOne({
                where: {
                    id_cliente: id
                }
            });
            return { msg: null, data: clientes };
        } catch (error) {
            return { msg: null, data: [] };
        }
    },

    addItem: (req, res) => {

    }
}

module.exports = homeService;