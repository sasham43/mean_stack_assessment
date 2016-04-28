// modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var index = require('./routes/index');

var app = express();

// database
var mongoURI = 'mongodb://localhost/heroes';
var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.on('error', function(err){
  console.log('Error connecting to database:', err);
});

mongoDB.once('open', function(){
  console.log('Connected to database.');
});

// config
app.use(bodyParser.json());
app.use(express.static('server/public'));

// router
app.use('/', index);

// server
var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Server listening on port ' + port + '...\nPress Ctrl + c to quit');
});
