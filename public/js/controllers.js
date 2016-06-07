"use strict";

(function(){
  angular
  .module('gifControllers', [])
  .controller('CatalogueCtrl', function($scope, Gif, $window){
      // set variable in this scope, so the items can be accessed outside of loadGifs();
      $scope.catalogue;
      // limit of items that can be shown at any time.
      $scope.gifLimit = 10;
      $scope.gifTotal;
      if($scope.gifLimit >= $scope.gifTotal){
        $scope.showBtn = true;
      } else{
        $scope.showBtn = false;
      }

      // function that grabs gifs from API
      $scope.loadGifs = function(){
        Gif.getGifs(function(response){
        $scope.catalogue = response.data;
        $scope.gifTotal = $scope.catalogue.length;
        });
      }
      // function that loads specified amount of items
      $scope.loadMore = function() {
        $scope.gifLimit += 10;
        // makes load more button disapear if all the gifs are loaded
        if($scope.gifLimit >= $scope.gifTotal) {
          $scope.showBtn = false;
        } else {
          $scope.showBtn = true;
        }
      }
      // makes the call to load the gifs
      $scope.loadGifs();
  })
  .controller('GifCtrl', function($scope, $state, Gif, $http){
    $scope.reload = function(){
      $state.reload('gif');
    };

    $scope.loadGif = function(){
      Gif.getGiphys(function(response){
        var giphy = response.data;
        console.log(giphy);
        return $scope.giphy = giphy.data;
      });
    };

    var txt = document.querySelector('.inputs');
    setInterval(function() {
      txt.focus()
    }, 10);

    $scope.adder = function(){
      var ref = $scope.ref;
      ref.img_url = $scope.giphy.image_original_url;
      ref.og_still_url = $scope.giphy.fixed_height_small_still_url;
      if(ref.critique === ''){
        console.log('nothing there...');
        alert('oops! please enter text before saving...');
      } else{
        ref.critiques = [{body: ref.critique}];
        $http.post('/api/gifs', ref)
        .then(function(response){
          console.log(ref.critiques);
        });
        $state.go('catalogue');
      }
    };

    $scope.loadGif();

  })
  .controller('ShowCtrl', function($scope, $http, $stateParams, Gif){
    var refId = $stateParams.id;

    function getSpecs() {
      Gif.getGifs(function(response){
        var refs = response.data;
        $scope.refs = refs;
        $scope.refs.forEach(function(ref){
          if(refId === ref._id){
            $scope.ref = ref;
          };
        });
      });
    };

    $scope.likeAdd = function(ref){
      $http.put('/api/gifs/:_id/likeIt', ref)
      .then(function(response){
        getSpecs();
      });
    };

    getSpecs();

  })
})();
