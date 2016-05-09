"use strict";

(function(){

  angular
  .module('gifGalleryApp' ,[
    'ui.router',
    'gifControllers',
    'apiService'
  ])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider, Gif){
      $stateProvider
      .state('catalogue', {
        url: '/catalogue',
        templateUrl: 'views/catalogue-view.html',
        controller: 'CatalogueCtrl'
      })
      .state('gif', {
        url:'/gif',
        templateUrl: 'views/gif-view.html',
        controller: 'GifCtrl'
      })
      .state('show', {
        url: '/catalogue/:id',
        templateUrl: 'views/show.html',
        controller: 'ShowCtrl'
      });
      $urlRouterProvider.otherwise('/gif')
    }
  ]);
})();
