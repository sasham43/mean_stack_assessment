var app = angular.module('heroApp', []);

app.controller('HeroController', ['$http', function($http){
  var hc = this;

  hc.hero = {}; // for adding heroes
  hc.heroes = []; // for getting heroes from database

  hc.powers = [
    'Invisibility',
    'Flight',
    'Super Speed',
    'Super Strength',
    'Heat Vision',
    'Accelerated Healing',
    'Power Blast',
    'Animal Affinity'
  ];

  hc.addHero = function(){
    console.log('hero:', hc.hero);
    $http.post('/add', hc.hero).then(function(response){
        hc.getHeroes();
    });
  };

  hc.getHeroes = function(){
    $http.get('/heroes').then(function(response){
      hc.heroes = response.data;
    });
  };

  hc.removeHero = function(id){
    $http.delete('/remove/' + id).then(function(response){
      hc.getHeroes();
    });
  };

  hc.getHeroes(); // get heroes on page load
}]);
