var mongoose = require('mongoose');
var Shkeema = mongoose.Schema; // sorry couldn't resist

var heroShkeema = new Shkeema({
  alias: {type: String, required: true, unique: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  city: {type: String, required: true},
  power: {type: String, required: true}
});

var HeroModel = mongoose.model('Hero', heroShkeema);

module.exports = HeroModel;
