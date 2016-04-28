"use strict";

(function(){
  angular
  .module('hypeControllers', [])
  .controller('CatalogueCtrl', function($scope, HypeRef, $http){

    HypeRef.getRefs(function(response){
      var catalogue = response.data;
      $scope.catalogue = catalogue;
    });

    var srch = document.querySelector('.inputs');
    setInterval(function() {
      srch.focus()
    }, 10);

  })
  .controller('RefCtrl', function($scope, $state, HypeRef, $http){
    $scope.reload = function(){
      $state.reload('ref');
    };

    $scope.loadGiph = function(){
      HypeRef.getGiphs(function(response){
        var giph = response.data;
        console.log(giph);
        return $scope.giph = giph.data;
      });
    };

    var txt = document.querySelector('.inputs');
    setInterval(function() {
      txt.focus()
    }, 10);

    $scope.adder = function(){
      var ref = $scope.ref;
      ref.img_url = $scope.giph.image_original_url;
      ref.og_still_url = $scope.giph.fixed_height_small_still_url;
      ref.critiques = [{body: ref.critique}];
      $http.post('/api/refs', ref)
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
