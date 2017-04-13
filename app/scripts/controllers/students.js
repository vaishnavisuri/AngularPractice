/**
 * Created by vaishnavi on 2/4/17.
 */

var app = angular.module('sampleExampleApp')
  app.controller('StudentsCtrl', function ($scope,$http) {
   $http.get('views/students.js').then(function (response) {

     var data = response.data;
     var students = data;
   });

    $scope.goback = function () {
      window.location.href('/dashboard');
    };
  });

//app.controller('StudentsCtrl', ['$scope', '$http', function (scope, http){
//  http.get('http://www.bogotobogo.com/AngularJS/files/httpRequest/planet2.json').then(function (success,data) {
//    scope.students = data;
//  });
//}]);

app.controller('StudentsCtrl', function($scope, $http) {
  $http.get("http://www.bogotobogo.com/AngularJS/files/httpRequest/planet2.json")
    .then(function(success,response) {
      $scope.students = response;
    });
});
//app.controller('StudentsCtrl', function ($scope, $http){
//  $http({
//    method: 'GET',
//    url: 'http://www.bogotobogo.com/AngularJS/files/httpRequest/planet2.json'
//  }).then(function (success,response) {
//    $scope.students = response;
//  });
//});
