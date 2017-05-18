var express = require('express');
var bodyParser = require('body-parser');
// var $ = require("jquery");

var htmlRoute = require("./app/routing/htmlRoutes.js");
var apiRoute = require("./app/routing/apiRoutes.js");

var app = express();
var PORT =process.env.PORT || 3020;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Import modules from htmlRoutes & apiRoutes
htmlRoute(app);
apiRoute(app);

// $('#submitButtonId').click(function(){
//   console.log(this);
// });


app.listen(PORT, () => console.log("App listening on port " + PORT));