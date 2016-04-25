"use strict";

(function(){
  angular
  .module('apiService', [])
  .service('HypeRef', function($http){
    this.getRefs = function(callback){
      return $http.get('http://localhost:8080/api/refs')
      .then(callback);
    };
  });

})();
