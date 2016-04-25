"use strict";

(function(){

  angular
  .module('hypeRefApp' ,[
    'ui.router',
    'ngResource',
  ])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
      $stateProvider
      .state('hype-refs', {
        url: '/hype-refs',
        templateUrl: 'views/hype-refs.html',
        controller: 'HypeRefsCtrl'
      })
      .state('show', {
        url: '/hype-refs/:id',
        templateUrl: 'views/show.html',
        controller: 'ShowCtrl'
      })
      .state('newRef', {
        url:'/hype-refs/new',
        templateUrl: 'views/new-hype-ref.html',
        controller: 'NewRefCtrl'
      })
      .state('editRef', {
        url: '/hype-refs/:id/edit',
        templateUrl: 'views/edit-hype-ref.html',
        controller: 'EditCtrl'
      });
    }
  ]);
})();
