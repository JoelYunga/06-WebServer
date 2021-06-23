const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

// Establecer el motor para las vistas
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {

    res.render('home', {
        titulo: 'Home',
        nombre: 'mundo',
    });
});

app.get('/about', function(req, res) {

    res.render('about', {
        titulo: 'About',
    });
});


/* app.get('/data', (req, res) => {
    res.send('data');
}); */


app.listen(port, () => {
    console.log('Servidor Iniciado, escuchando en el puerto 3000');
});