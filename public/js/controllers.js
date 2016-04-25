"use strict";

(function(){
  angular
  .module('hypeControllers', [])
  .controller('HypeRefsCtrl', function($scope, $http){
      $http.get('https://api.hypem.com/v2/popular?mode=now&count=5&key=swagger')
      .then(function(response){
        var hypemTracks = response.data;
        $scope.hypemTracks = hypemTracks;
      });
      $http.get('https://api.soundcloud.com/tracks?kind=top&genre=soundcloud%3Agenres%3Aall-music&client_id=4f2b9615c8783056a2eae41eba103c48&limit=5')
      .then(function(response){
        var sndTracks = response.data;
        $scope.sndTracks = sndTracks;
      });

      $http.get('https://api-v2.soundcloud.com/charts?kind=top&genre=soundcloud%3Agenres%3Aall-music&client_id=02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea&limit=20&offset=0&linked_partitioning=1&app_version=1461312517')
      // .then(function(response){
      //   var refs = response.data;
      //   $scope.refs = refs;
      // });

      // SC.initialize({
      //   client_id: '4f2b9615c8783056a2eae41eba103c48'
      // });

// find all tracks with the genre 'punk' that have a tempo greater than 120 bpm.
// SC.get('/tracks', {
//   genres: 'house'
// }).then(function(tracks) {
//   console.log(tracks);
//     $scope.refs = tracks;
// });

  })
  .controller('NewRefCtrl', function($scope, $state, $http){
    $scope.ref = {};
    $scope.adder = function(){
      $http.post('http://localhost:3001/api/refs', $scope.ref)
      .then(function(){
        $state.go('hype-refs');
      });
    };
  })
  .controller('ShowCtrl', function($scope, $http, $stateParams){
  })
  .controller('EditCtrl', function($scope, $state, $stateParams){

  });
})();

// sndcld client id 4f2b9615c8783056a2eae41eba103c48
// client secret 1c1fb12b48934406245e0a82f59b2518
