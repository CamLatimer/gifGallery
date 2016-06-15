"use strict";

(function(){
  angular
  .module('gifControllers', [])
  .controller('CatalogueCtrl', function($scope, Gif, $window){
      // set variable in this scope, so the items can be accessed outside of loadGifs();
      $scope.catalogue;
      // limit of items that can be shown at any time.
      $scope.gifLimit = 12;
      $scope.gifTotal;
      var intervl;

      function blink(){
        $scope.loading = true;
        var status = 0;
        var holder = document.querySelector('.loading-holder');
        intervl = setInterval(function() {
          if (status === 0){
            holder.style.opacity = 0;
            console.log('light');
            status = 1;
          } else if(status === 1) {
            holder.style.opacity = 1;
            console.log('dark');
            status = 0;
          }
        }, 300);
      }
      function stopBlink(){
        $scope.loading = false;
        clearInterval(intervl);
        console.log('stopped');
      }

      // function that grabs gifs from API
      $scope.loadGifs = function(){
        //when there's no data, run the interval
        blink();
        Gif.getGifs(function(response){
        $scope.catalogue = response.data;
        // when there's data, clear the interval
        stopBlink();
        $scope.gifTotal = $scope.catalogue.length;
        if($scope.gifLimit >= $scope.gifTotal){
          $scope.showBtn = false;
        } else{
          $scope.showBtn = true;
        }
        });
      }
      // function that loads specified amount of items
      $scope.loadMore = function() {
        $scope.gifLimit += 12;
        // makes load more button disapear if all the gifs are loaded
        if($scope.gifLimit >= $scope.gifTotal) {
          $scope.showBtn = false;
        } else {
          $scope.showBtn = true;
        }
      }

      // makes the call to load the gifs
      $scope.loadGifs();
      // makes load more button disapear if all the gifs are loaded

  })
  .controller('GifCtrl', function($scope, $state, Gif, $http){

    $scope.loading = true;

    $scope.reload = function(){
      $state.reload('gif');
    };

    $scope.loadGif = function(){
      Gif.getGiphys(function(response){
        var giphy = response.data;
        if(giphy){
          $scope.loading = false;
        }
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
        $scope.loading = true;
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
