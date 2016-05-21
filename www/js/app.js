// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(function($ionicPlatform, $cordovaStatusbar) {
  // $cordovaStatusbar.hide();
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }

    // StatusBar.hide();
    
    // if (window.StatusBar) {
    //   // org.apache.cordova.statusbar required
    //   // StatusBar.styleDefault();
    //   // StatusBar.hide();
    // }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.feed', {
    url: '/feed',
    views: {
      'menuContent': {
        templateUrl: 'templates/feed.html'
      }
    }
  })

  .state('app.inbox', {
    url: '/inbox',
    views: {
      'menuContent': {
        templateUrl: 'templates/inbox.html'
      }
    }
  })

  .state('app.timeline', {
    url: '/timeline',
    views: {
      'menuContent': {
        templateUrl: 'templates/timeline.html'
      }
    }
  })

  .state('app.single-message', {
    url: '/single-message',
    views: {
      'menuContent': {
        templateUrl: 'templates/single-message.html'
      }
    }
  })

  .state('app.view-post', {
    url: '/view-post',
    views: {
      'menuContent': {
        templateUrl: 'templates/view-post.html'
      }
    }
  })

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html'
      }
    }
  })

  .state('app.forgot', {
    url: '/forgot',
    views: {
      'menuContent': {
        templateUrl: 'templates/forgot.html'
      }
    }
  })

  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html'
      }
    }
  })


  .state('app.friend-list', {
    url: '/friend-list',
    views: {
      'menuContent': {
        templateUrl: 'templates/friend-list.html'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/profile');
});
