(function(){
  'use strict';

  angular.module('starter', ['ionic'])

  .run(function($ionicPlatform){
    $ionicPlatform.ready(function(){
      if(window.cordova && window.cordova.plugins.Keyboard){
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar){
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider, $httpProvider){
    $httpProvider.defaults.withCredentials = true;

    $stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })
      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-dash.html',
            controller: 'DashboardCtrl'
          }
        }
      })
      .state('tab.notes-list', {
        url: '/notes',
        views: {
          'tab-notes': {
            templateUrl: 'templates/tab-notes-list.html',
            controller: 'NotesListCtrl'
          }
        }
      })
      .state('tab.notes-detail', {
        url: '/notes/:noteId',
        views: {
          'tab-notes': {
            templateUrl: 'templates/tab-notes-detail.html',
            controller: 'NotesDetailCtrl'
          }
        }
      })
      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      });
    $urlRouterProvider.otherwise('/tab/dash');
  });
})();
