//Prueba carga libros.
let librosdataJson =require('./libros.json');
// let librosdata = JSON.parse(librosdataJson);
// parse(): Acepta una cadena JSON como parámetro, y devuelve el objeto JavaScript correspondiente.
// stringify(): Acepta un objeto como parámetro, y devuelve la forma de cadena JSON equivalente.
let listaLibroArrayParse = JSON.parse(librosdataJson);

console.log(listaLibroArrayParse);
console.log(listaLibroArrayParse[0].titulo);

let listaLibroArray = [];

librosdataJson.forEach(x => {
    listaLibroArray.push(x);
});

console.log(listaLibroArray);

// for (libro of librosdataJson) {
//     listaLibroArray.push(libro.titulo);
// }

// librosdataJson.forEach(x => {listaLibroArray.push(x.autor);});

// console.log(listaLibroArray);



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
    res.render("index", {layout:"listaLibros", listaLibroArray, listExists: true});
});

app.use(express.static("public"));









