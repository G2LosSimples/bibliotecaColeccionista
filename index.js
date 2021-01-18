require ("./database");

//cargar el express
const express = require("express");

//cargar el modulo handlebars
const exphbs = require("express-handlebars");

//carga módulo Morgan
const morgan = require ("morgan");

//crea un servidor utilizando express
const app = express();

//elige el puerto en el que se montará el servidor
const port = 3000;

//escucha el puerto
app.listen(port, console.log(`Escuchando el puerto ${port}`));


//elige el motor de renderizado
app.set("view engine", "hbs");

//configuración del motor
app.engine("hbs", exphbs({
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/parciales",
    extname: "hbs"
}));

//indica el lugar donde coge los "parciales"
app.get("/", function(req, res) {
    res.render("index", { layout: "main", listaLibroArray, listExists: true });
});

app.get("/libroDetalle", function(req, res) {
    res.render("index", { layout: "libroDetalle", listaLibroArray, listExists: true });
});

app.get("/libroNuevo", function(req, res) {
    res.render("index", { layout: "libroNuevo", listaLibroArray, listExists: true });
});

app.get("/listaLibros", function(req, res) {
    res.render("index", { layout: "listaLibros", listaLibroArray, listExists: true });
});

app.get("/usuarioLibro", function(req, res) {
    res.render("index", { layout: "usuarioLibro", listaLibroArray, listExists: true });
});

app.use(morgan("dev"));

app.use(express.static("public"));