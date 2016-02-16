var Food = require('./models/food.js')

module.exports = function(app) {

  app.post('/search', function(req, res) {
    console.log("I am here");
    console.log(req.body)
    var foods= req.body.wines;
    Food.findOne({"name": foods}, function(err,food) {
      if(err) {
        res.send(err);
      } else {
        console.log(food.wines)
        res.json(food.wines);
        }
      });
  });
};

        // res.sendfile('./public/views/index.html');
  // app.get('*', function(req, res) {
  //           res.sendfile('./public/views/index.html'); 
  //       });

  //   };


