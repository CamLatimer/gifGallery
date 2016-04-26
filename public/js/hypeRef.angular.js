"use strict";

(function(){

  angular
  .module('hypeRefApp' ,[
    'ui.router',
    'hypeControllers',
    'apiService'
  ])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider, HypeRef){
      $stateProvider
      .state('catalogue', {
        url: '/catalogue',
        templateUrl: 'views/catalogue-view.html',
        controller: 'CatalogueCtrl'
      })
      .state('art', {
        url:'/',
        templateUrl: 'views/art-view.html',
        controller: 'ArtCtrl'
      })
      .state('show', {
        url: '/catalogue/:id',
        templateUrl: 'views/show.html',
        controller: 'ShowCtrl'
      })
      .state('newRef', {
        url:'/hype-refs/new',
        templateUrl: 'views/new-hype-ref.html',
        controller: 'NewRefCtrl'
      });
      $urlRouterProvider.otherwise('/')
    }
  ]);
})();
