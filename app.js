const express = require('express');
const routes = require('./routes');
const app = express();
const morgan = require('morgan');
const path = require('path');
const express_layout = require('express-ejs-layouts');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.set('layout', 'layouts/layout');

//middlewares
app.use(express_layout)
app.use('/', routes)
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'static')))

//servidor
app.listen(3000, () => {
    console.log('Servidor: http:localhost:3000');
})