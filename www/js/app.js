// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
magic_land = angular.module('magic_land', ['ionic']) ;

magic_land.controller
(
  'abra_cadabra', 
  
  function($scope, $http) 
  {
      $http.get('https://heart-pancitjef.c9.io/user/').then
      (
        function(resp) 
        {
          $scope.conditions = resp.data.conditions;
        }, 
        
        function(err) 
        {
          console.error('ERR', err);
          // err.status will contain the status code
          $scope.conditions = " ugly!";
        }
      )
  }
);

magic_land.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}) ;

