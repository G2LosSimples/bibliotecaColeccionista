'use strict';

const {bookController} = require("../controller/bookController");
const {Router} = require("express");
const router = Router();

router.get("/", bookController.renderInicio);

module.exports = router;