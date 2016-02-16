
//modules ======
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//configuration ======
// //config files
var db = require('./config/db.js');


// set our port

var port = process.env.PORT || 8080;

//parse application/json
app.use(bodyParser.json());

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

app.listen(port);

console.log("You are connected to the port ");

exports = module.exports = app;