var router = require('express').Router();
var path = require('path');
var mongoose = require('mongoose');
var Hero = require('../../models/hero');

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.post('/add', function(req, res){
  Hero.create(req.body, function(err){
    if (err){
      console.log('Error creating hero:', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

router.get('/heroes', function(req, res){
  var heroes = Hero.find({}, function(err, heroes){
    if (err){
      console.log('Error retrieving heroes:', err);
      res.sendStatus(500);
    } else {
      console.log('Retrieved heroes:', heroes);
      res.send(heroes);
    }
  });
});

router.delete('/remove/:id', function(req, res){
  var heroID = req.params.id;
  Hero.findOneAndRemove({_id: heroID}, function(err, hero){
    if (err){
      console.log('Error removing hero:', err);
      res.sendStatus(500);
    } else {
      console.log('Removed hero:', hero);
      res.sendStatus(200);
    }
  });
});

module.exports = router;
