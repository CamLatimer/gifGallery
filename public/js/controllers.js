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
      // ref.og_still_url = $scope.giph.fixed_height_small_still_url;
      // ref.critiques = [{body: ref.critique}];
      $http.post('https://localhost:8080/api/refs', ref)
      .then(function(response){
        $state.go('catalogue');
      });
    };

    $scope.loadGiph();

    // $http.get('https://api.imgur.com/3/gallery/t/items/cat', {headers: {'Authorization': 'Client-ID feecb4475463d6d'}})
    // .then(function(response){
    //   console.log('imgur-data: ' + response.data);
    // })

    // $http.get('http://api.lordofthememe.com/v1/posts/random.json')
    // .then(function(response){
    //   console.log(response.data);
    // })
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
