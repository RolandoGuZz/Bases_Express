const Libro = require('../models/libro');

const bookService = {
    createBook: async (datosLibro) => {
        try {
            return await Libro.create(datosLibro);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = bookService;