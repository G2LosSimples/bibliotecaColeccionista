const { Schema, model } = require('mongoose');

const libroSchema = new Schema({
    titulo: String,
    autor: String,
    anio: Number,
    precio: Number,
    propietario: String,
    estado: String,
    descripcion: String
});

module.exports = model('libro', libroSchema);