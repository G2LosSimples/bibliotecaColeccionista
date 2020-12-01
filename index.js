//cargar el express
const express = require("express");

//cargar el modulo handlebars
const exphbs = require("express-handlebars");

//crea un servidor utilizando express
const app = express();

//elige el puerto en el que se montara el servidor
const port = 3000;

//escucha el puerto
app.listen(port);


//elige el motor de renderizado
app.set("view engine", "handlebars");

//configuración del motor
app.engine("handlebars", exphbs({
    layoutsDir:__dirname+"views/layouts",
    layoutsDir:__dirname+"views/parciales",
}));

//indica el lugar donde coge los "parciales"
app.get("/", function(req, res){
    res.render("index");
});

app.use(express.static("public"));
