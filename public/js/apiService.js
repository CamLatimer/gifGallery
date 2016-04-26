"use strict";

(function(){
  angular
  .module('apiService', [])
  .service('HypeRef', function($http){
    this.getRefs = function(callback){
      return $http.get('http://localhost:8080/api/refs')
      .then(callback);
    };
    this.getGiphs = function(callback){
      return $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
      .then(callback);
    };
  });
})();

// giphy public beta key dc6zaTOxFJmzC
// gangsta kitten id:"l4KhYXYuv0HH0AExy"
