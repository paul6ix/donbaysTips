// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .config(function ($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'MenuController'
      })
      /*Experimental features for tabs menu */
      .state('main.tips', {
        url: '/tips',
        views: {
          'tab-tips': {
            templateUrl: 'templates/tab-tips.html',
            controller: 'MenuController'

          }
        }

      })
      .state('main.news', {
        url: '/news',
        views: {
          'tab-news': {
            templateUrl: 'templates/tab-news.html',
            controller: 'NewsController'
          }
        }
      })
      .state('main.livescore', {
        url: '/livescore',
        views: {
          'tab-livescore': {
            templateUrl: 'templates/tab-livescore.html',
            controller: 'LivescoreController'
          }
        }
      })
      .state('main.MenuContents', {
        url: '/MenuContents',
        templateUrl: 'templates/MenuContents.html',
        controller: 'MenuController'
      })
      .state('main.PostDetails', {
        url: '/PostDetail/:PostId',
        templateUrl: 'templates/PostDetails.html',
        controller: 'PostController'
      });
    $urlRouterProvider.otherwise('/main/MenuContents');

  });
