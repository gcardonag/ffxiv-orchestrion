var orchestrionApp = angular.module("orchestrionApp", [
  'ui.bootstrap',
  'ui.router',
  'ngStorage',
  'orchestrionApp.routes',
  'orchestrionApp.controllers'
]);

angular.module('orchestrionApp.controllers', [
  'orchestrionApp.controllers.app'
]);
