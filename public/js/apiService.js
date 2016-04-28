"use strict";

(function(){
  angular
  .module('apiService', [])
  .service('HypeRef', function($http){
    this.getRefs = function(callback){
      return $http.get('https://localhost:8080/api/refs')
      .then(callback);
    };
    this.getGiphs = function(callback){
      return $http.get('https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
      .then(callback);
    };
  });
})();

// giphy public beta key dc6zaTOxFJmzC
// gangsta kitten id:"l4KhYXYuv0HH0AExy"

// imgur client id feecb4475463d6d
// imgur client secret 34e63c1274a1eaa76cc20ffa6df35e9368ac7c8a

// deviant art client ed 4628
// deviant art shared key 9b89e4d4fc6899a00cfa3d629d056fc6

// flicker key bf937da79b9e9c807250789f79452a82
// flickr secrete e996d35c2e99460b
