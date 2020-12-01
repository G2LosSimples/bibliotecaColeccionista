const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;


app.set("view engine", "handlebars");
app.engine("handlebars", exphbs());
app.get("/", function(req, res){
    res.render("index");
});
app.listen(port);