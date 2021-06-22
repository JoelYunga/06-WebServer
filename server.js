const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'))

// Establecer el motor para las vistas
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {

    res.render('home', {
        titulo: 'Home',
        nombre: 'pePiTo pEreZ',
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


app.listen(3000, () => {
    console.log('Servidor Iniciado, escuchando en el puerto 3000');
});