'use strict';

const {bookController} = require("../controller/bookController");
const {Router} = require("express");
const router = Router();

router.get("/", bookController.renderInicio);
router.get("/listaLibros", bookController.listarLibros);
router.get("/libroDetalle",bookController.libroDetalle);
router.get("/libronuevo", bookController.renderForumularioNuevo);
module.exports = router;