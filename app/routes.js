var Food = require('./models/food.js')

module.exports = function(app) {

  app.post('/search', function(req, res) {
    console.log("I am here");
    console.log("my food is", req.body)
    var food1= req.body.name;
    var food2= req.body.name2;
    var newArr;
    var newArr2;
    if (!req.body.name2) {
    Food.findOne({"name": food1}, function(err,food) {
      if(err) {
        res.send(err);
      } else {
        newArr= food.wines;
        res.json(newArr)
        }
      })
  } else {
    Food.findOne({"name": food1}, function(err,food) {
      if(err) {
        res.send(err);
      } else {
        newArr= food.wines;
        }
      });
    Food.findOne({"name" : food2}, function(err,food){
      if(err) {
        res.send(err);
      } else {
        newArr2 = food.wines
        var result = newArr.filter(function(n) {
                    return newArr2.indexOf(n) != -1 })
        res.json(result)
      }
    })
  } 
  });
};
