angular.module('orchestrionApp.controllers.app', [])
.controller('appController', function ($scope, $sce, data) {
  $scope.showHtml = function (input) {
    return $sce.trustAsHtml(input);
  };

  $scope.data = data;
});
