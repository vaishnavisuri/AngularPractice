'use strict';

/**
 * @ngdoc function
 * @name sampleExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleExampleApp
 */
angular.module('sampleExampleApp')
  .controller('CoursesCtrl', function ($scope) {
    $scope.cmessage = "COURESES LISTS";
    $scope.courses = ["HTML5","CSS","Bootstrap","JavaScript","Jquery","AngulkarJs"];
    $scope.add = function(){
      $scope.courses.push($scope.enteredName);
      $scope.enteredName = '';
    };
    $scope.remove = function(){
      var i = $scope.courses.indexOf();
      $scope.courses.splice(i,1);
    };
    $scope.goback = function(){
     window.location.href('/dashboard');
    };

  });
