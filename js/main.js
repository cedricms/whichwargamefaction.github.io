var app = angular.module("wargameApp", []);

app.controller("ArmyController", function($scope, $http) {
  $http.get('./json/armies.json')
       .then(function(response){
    $scope.armies = response.data;
  });
});