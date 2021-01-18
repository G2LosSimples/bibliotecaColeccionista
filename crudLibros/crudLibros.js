'use strict'
const libro = require("../models/libro");
const libroSchema = require ("../models/libro"); //Llama al modelo de  libro creado en libro.js

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

crearLibro ("La chica del tren", "Paula Hawkings", 2015, 19.00, "Silvia Hawkings", "Regulero", "Nos ha molado mucho, gracias Paula.");

//READ-FIND


