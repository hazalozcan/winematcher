var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mealSchema = new Schema({
  name: String,
  type: String,
  wines: [String]
});

module.exports = mongoose.model('Food', mealSchema);

