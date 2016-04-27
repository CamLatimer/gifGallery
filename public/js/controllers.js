"use strict";

(function(){
  angular
  .module('hypeControllers', [])
  .controller('CatalogueCtrl', function($scope, HypeRef, $http){

    HypeRef.getRefs(function(response){
      var catalogue = response.data;
      $scope.catalogue = catalogue;
    });
  })
  .controller('RefCtrl', function($scope, $state, HypeRef, $http){
    $scope.reload = function(){
      $state.reload('ref');
    };

    $scope.loadGiph = function(){
      HypeRef.getGiphs(function(response){
        var giph = response.data;
        return $scope.giph = giph.data;
      });
    };

    var nextBtn = document.querySelector('#next-btn');
    var txt = document.querySelector('#txtAr');
    var arrow = document.querySelector('.fa-arrow-right');
    setInterval(function() {
      txt.focus()
    }, 10);

    $scope.adder = function(){
      var ref = $scope.ref;
      ref.img_url = $scope.giph.image_original_url;
      ref.critiques = [{body: ref.critique}];
      $http.post('http://localhost:8080/api/refs', ref)
      .then(function(response){
        $state.go('catalogue');
      });
    };

    $scope.loadGiph();

  })
  .controller('ShowCtrl', function($scope, $http, $stateParams, HypeRef){
    var refId = $stateParams.id;
    console.log(refId);
    HypeRef.getRefs(function(response){
      var refs = response.data;
      $scope.refs = refs;
      $scope.refs.forEach(function(ref){
        if(refId === ref._id){
          $scope.ref = ref;
          console.log($scope.ref)
        };
      });
    });
  })
})();

// sndcld client id 4f2b9615c8783056a2eae41eba103c48
// client secret 1c1fb12b48934406245e0a82f59b2518
// last.fm client id cb00639c97833039c6767c12ff335cf8
// Shared secret	1a50195b4b3af4a5a597c1917dade5dd
