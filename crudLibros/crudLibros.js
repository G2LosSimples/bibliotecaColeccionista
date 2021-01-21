'use strict'
const libro = require("../models/libro");
//const libroSchema = require ("../models/libro"); //Llama al modelo de  libro creado en libro.js

require ("../database");

//CREAR

async function crearLibro (titulo, autor, anio, precio, propietario, estado, descripcion) {
    const nuevoLibro = new libro ({
        titulo: titulo, 
        autor: autor, 
        anio: anio, 
        precio: precio, 
        propietario: propietario, 
        estado: estado, 
        descripcion: descripcion
    });
    await nuevoLibro.save();
    console.log(nuevoLibro);
};

//crearLibro ("xxx", "zzz", 2001, 8.99, "rrr", "hhh", "jjjjjj");

//READ-FIND
async function buscarTodosLibros (){
    const listTodosLibros = await libro.find();
    console.log(`Esto es el Findall:${listTodosLibros}`);
    return listTodosLibros
};

async function buscarTitulo (titulo) {
    let resultadoBusqueda = await libro.find({
        titulo:titulo
    });
    if (resultadoBusqueda == "") {
        resultadoBusqueda = "Upppps, prueba la próxima vez.";
    }
    console.log (resultadoBusqueda);
    return resultadoBusqueda;
}; 

async function buscarId (id){
    const resultado = await libro.findById(id);
    return resultado;
};

//buscarTitulo ("La chica del tren");

//DELETE

async function borrarLibro (id) {
    let libroBorrado = await libro.findByIdAndDelete (id);
    console.log (libroBorrado + " se ha eliminado de la base de datos.")
};
//borrarLibro ("6006b9b1f21202090223e5cd");

//UPDATE
 async function actualizarLibro (titulo, nuevoEstado) {
     let libroActualizado = await libro.findOneAndUpdate ({titulo:titulo}, {estado:nuevoEstado}, {new:true});
     console.log (libroActualizado + " ha sido actualizado.")
 };
//  actualizarLibro ("La chica del tren", "Está mordido.");


module.exports = {buscarTodosLibros, buscarId};