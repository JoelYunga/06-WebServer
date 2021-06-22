const http = require('http');

http.createServer((req, res) => {
    /*  res.write("Hola Mundo :) Ahora en la Web desde JS")
    res.end();
 */
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let contenido = {
        personaje: "Iron Man",
        edad: 39,
        url: req.url
    }

    res.writeHead(JSON.stringify(contenido))
    res.end();

}).listen(3000);

console.log("Escuchando en el puerto 8080.....");