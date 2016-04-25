"use strict";

(function(){
  angular
  .module('hypeControllers', [])
  .controller('HypeRefsCtrl', function($scope, $http){
    $http.get('http://localhost:8080/api/refs')
    .then(function(response){
      console.log(response)
      var refs = response.data;
      $scope.refs = refs;
    });
    // hypem
      // $http.get('https://api.hypem.com/v2/popular?mode=now&count=10&key=swagger')
      // .then(function(response){
      //   var hypemTracks = response.data;
      //   $scope.hypemTracks = hypemTracks;
      // });
      // // last.fm
      // $http.get('https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=10&api_key=cb00639c97833039c6767c12ff335cf8&format=json')
      // .then(function(response){
      //   console.log(response)
      //   var lastFmTracks = response.data;
      //   $scope.lastFmTracks = lastFmTracks.tracks.track;
      // });
      // // soundcloud
      // $http.get('https://api.soundcloud.com/tracks?genres=all&playback_count&client_id=4f2b9615c8783056a2eae41eba103c48&limit=50')
      // .then(function(response){
      //   var sndTracks = response.data;
      //   $scope.sndTracks = sndTracks;
      // });
  })
  .controller('NewRefCtrl', function($scope, $state, $http){
    // $scope.ref = {};
    // $scope.adder = function(){
    //   $http.post('http://localhost:3001/api/refs', $scope.ref)
    //   .then(function(){
    //     $state.go('hype-refs');
    //   });
    // };
  })
  .controller('ShowCtrl', function($scope, $http, $stateParams){

  })
  .controller('EditCtrl', function($scope, $state, $stateParams){

  });
})();

// sndcld client id 4f2b9615c8783056a2eae41eba103c48
// client secret 1c1fb12b48934406245e0a82f59b2518
// last.fm client id cb00639c97833039c6767c12ff335cf8
// Shared secret	1a50195b4b3af4a5a597c1917dade5dd
