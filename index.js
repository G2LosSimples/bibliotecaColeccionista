//Prueba carga libros.
const librodata = require('./libros.json');

//cargar el express
const express = require("express");

//cargar el modulo handlebars
const exphbs = require("express-handlebars");

//crea un servidor utilizando express
const app = express();

//elige el puerto en el que se montara el servidor
const port = 3000;

//escucha el puerto
app.listen(port, console.log(`Escuchando el puerto ${port}`));


//elige el motor de renderizado
app.set("view engine", "hbs");

//configuración del motor
app.engine("hbs", exphbs({
    layoutsDir:__dirname+"/views/layouts",
    partialsDir:__dirname+"/views/parciales",
    extname:"hbs"
}));





//indica el lugar donde coge los "parciales"
app.get("/", function(req, res){
    res.render("index", {layout:"listaLibros", listaLibros: librodata, listExists: true});
});

app.use(express.static("public"));









