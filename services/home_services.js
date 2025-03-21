const homeService = {
    getDataHome: () => {
        const productos = [
            {
                nombre: 'Gallina 1',
                precio: 10.45
            },
            {
                nombre: 'Gallina 2',
                precio: 10.46
            },
            {
                nombre: 'Gallina 3',
                precio: 10.47
            },
            {
                nombre: 'Gallina 4',
                precio: 10.48
            }
        ]
        return productos
    },

    addItem: () => {
        
    }
}

module.exports = homeService;