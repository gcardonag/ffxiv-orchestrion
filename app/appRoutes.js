angular.module('orchestrionApp.routes', [])
.config(function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('app', {
    url: '',
    templateUrl: 'templates/app.tpl.html',
    controller: 'appController'
  });
});