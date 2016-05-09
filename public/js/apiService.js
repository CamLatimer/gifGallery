"use strict";

(function(){
  angular
  .module('apiService', [])
  .service('Gif', function($http){
    this.getGifs = function(callback){
      return $http.get('/api/gifs')
      .then(callback);
    };
    this.getGiphys = function(callback){
      return $http.get('https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
      .then(callback);
    };
  });
})();
