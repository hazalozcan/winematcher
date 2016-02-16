var Food = require('./models/food.js')

module.exports = function(app) {

  app.get('/', function(req, res) {
    console.log("I am here");
    Food.findOne({"name": "chicken"}, function(err,food) {
      if(err) {
        res.send(err);
      } else {
        console.log(food.wines)
        res.json(food.wines);
        }
      });
  });

  app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); 
        });

    };


