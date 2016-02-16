var Meals = require('../config/db.js')

module.exports = function(app) {
  app.get('/api/beef', function(req, res) {
    Meals.find(function(err,beef) {
      if(err) {
        res.send(err);
      } else {
        res.json(beef);
      }

    });
  });

  app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); 
        });

    };


