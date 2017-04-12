'use strict';

/**
 * @ngdoc overview
 * @name sampleExampleApp
 * @description
 * # sampleExampleApp
 *
 * Main module of the application.
 */
var app = angular.module('sampleExampleApp', ['ngRoute']);

app.config(function ($routeProvider,$locationProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/courses', {
        templateUrl: 'views/courses.html',
        controller: 'CoursesCtrl'
      })
      .when('/students', {
        templateUrl: 'views/students.html',
        controller: 'StudentsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode({enabled: true, requireBase: false});
    $locationProvider.hashPrefix("");
  });
app.controller('loginCtrl', function ($scope,$location) {
  $scope.submit = function(){
    console.log("in page");
    $location.url('/dashboard');
    $location.replace();
    //window.location = "dashboard.html";
  }
});
app.controller('DashCtrl', function () {

});

app.controller('gobackCtrl', function ($scope) {
  $scope.goback = function(){
    history.back();
  };
});
