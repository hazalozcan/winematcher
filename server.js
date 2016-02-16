
//modules ======
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require("mongoose");
var db = require('./config/db.js');
var Food = require('./app/models/food.js');

var beef = Food({
  name: 'beef',
  type: 'meats',
  wines: ["Barolo", "Bordeux", "Brunello", "Burgundy", "Cabernet Sauvignon", "Chianti",
          "Merlot", "Pinot Noir", "Shiraz", "Zinfandel"]
});

beef.save(function(err){
  if (err) throw err;
  console.log("beef is saved")
});

var beets = Food({
  name: 'beets',
  type: 'vegetables',
  wines: ["Pinot Gris", "Sancerre", "Cabernet Sauvignon", "Riesling",
          "Merlot", "Pinot Noir", "Sauvignon Blanc", "Gewurztraminer"]
});

beets.save(function(err){
  if (err) throw err;
  console.log("beets is saved")
});

var chicken = Food({
  name: 'chicken',
  type: 'meats',
  wines: ["Chardonnay", "Dolcetta", "Cabernet Sauvignon", "Beaujolais",
          "Merlot", "Pinot Noir", "Riesling", "Sherry"]
});

chicken.save(function(err){
  if (err) throw err;
  console.log("chicken is saved")
});

var carrots = Food({
  name: "carrots",
  type: 'vegetables',
  wines: ["Soave", "Dolcetta", "Chardonnay", "Riesling",
          "Semillon", "Gruner Veltliner", "Sauvignon Blanc", "Muscat"]
});

carrots.save(function(err){
  if (err) throw err;
  console.log("carrots is saved")
});

// set our port
var port = process.env.PORT || 8080;

//parse application/json
app.use(bodyParser.json());

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

app.use('/', function(req,res,next) {
  console.log('Request url:', req.url)
  Food.find({}, function(err, food) {
    console.log(food)
  });
  next();
});

app.listen(port);


console.log("You are connected to the port ");

exports = module.exports = app;