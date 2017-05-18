var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");

var htmlRoute = require("../app/routing/htmlRoutes.js");
var apiRoute = require("../app/routing/apiRoutes.js");

var app = express();
var PORT =/* process.env.PORT || */3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));





app.listen(PORT, () => console.log("App listening on port " + PORT));