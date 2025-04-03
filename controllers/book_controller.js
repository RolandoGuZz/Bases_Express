const bookService = require('../services/book_services');

const bookController = {
    addBook: async (req, res) => {
        try {
            const { titulo, autor, genero, publicacion } = req.body;
            await bookService.createBook({
                titulo,
                autor,
                genero,
                publicacion
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = bookController;