const bookService = require('../services/book_services');

const bookController = {
    addBook: async (req, res) => {
        try {
            const { titulo, autor, genero, publicacion } = req.body;
            const libro = await bookService.createBook({
                titulo,
                autor,
                genero,
                publicacion
            });
            return res.send(libro);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = bookController;