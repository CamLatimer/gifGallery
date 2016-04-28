"use strict";

(function(){
  angular
  .module('apiService', [])
  .service('HypeRef', function($http){
    this.getRefs = function(callback){
      return $http.get('/api/refs')
      .then(callback);
    };
    this.getGiphs = function(callback){
      return $http.get('https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
      .then(callback);
    };
  });
})();
