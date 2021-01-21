'use strict';

const {buscarTodosLibros, buscarId} = require("../crudLibros/crudLibros");
const libro = require("../models/libro");

const bookController = {};
    
bookController.renderInicio = (req, res) => {
    res.render("index", {layout: "main"});
};

bookController.listarLibros = (req, res) =>{
    let listLibros = buscarTodosLibros();
    console.log(`Soy el Controlador:${listLibros}`);
    res.render("index", {layout:"listaLibros", listLibros, listExists: true});
};

bookController.libroDetalle = (req,res) =>{
    res.render("index", {layout:"libroDetalle.hbs", libro});
};

bookController.renderForumularioNuevo = (req, res) =>{
    res.render("index",{layout:"libroNuevo.hbs"});
}

// app.get("/", function(req, res) {
//     res.render("index", { layout: "main", listaLibroArray, listExists: true });
// });


module.exports = {bookController};