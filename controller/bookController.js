'use strict';

const bookController = {};
    
bookController.renderInicio = (req, res) => {
    res.render("index", {layout: "main"});
};


// app.get("/", function(req, res) {
//     res.render("index", { layout: "main", listaLibroArray, listExists: true });
// });


module.exports = {bookController};