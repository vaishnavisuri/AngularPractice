'use strict';

/**
 * Created by vaishnavi on 2/4/17.
 */

var app = angular.module('sampleExampleApp');
  app.controller('StudentsCtrl', function ($scope,$http) {
   $http.get('students.json').then(function (response) {
     $scope.students = response.data;
   });

    $scope.goback = function () {
      window.location.href('/dashboard');
    };
  });

