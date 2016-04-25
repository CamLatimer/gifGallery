"use strict";

(function(){
  angular
  .module('hypeControllers', [])
  .controller('HypeRefsCtrl', function($scope, HypeRef, $stateParams, $state, $http){
    HypeRef.getRefs(function(response){
      var refs = response.data;
      $scope.refs = refs;
    });
    $scope.adder = function(){
      var ref = $scope.ref;
      $http.post('http://localhost:8080/api/refs', ref)
      .then(function(response){
        $scope.refs.push(ref);
        console.log($scope.refs);
      });
    };
  })
  .controller('ShowCtrl', function($scope, $http, $stateParams, HypeRef){
    var refId = $stateParams.id;
    console.log(refId);
    HypeRef.getRefs(function(response){
      var refs = response.data;
      refs.forEach(function(ref){
        if(refId === ref._id){
          $scope.ref = ref;
        }
      });
    });

  })
  .controller('EditCtrl', function($scope, $state, $stateParams){

  });
})();

// sndcld client id 4f2b9615c8783056a2eae41eba103c48
// client secret 1c1fb12b48934406245e0a82f59b2518
// last.fm client id cb00639c97833039c6767c12ff335cf8
// Shared secret	1a50195b4b3af4a5a597c1917dade5dd
