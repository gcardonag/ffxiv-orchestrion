angular.module('orchestrionApp.controllers.app', [])
.controller('appController', function ($scope, $sce, $localStorage, data) {
  var localStorage = $localStorage;

  $scope.showHtml = function (input) {
    return $sce.trustAsHtml(input);
  };

  $scope.data = data;

  $scope.actions = {
    saveRollInHistory: function(id) {
      var index = id-1;
      localStorage.ffxivOrchestrion[index] = _.defaults({
        checked: true,
        ingredients: []
      });

      localStorage.ffxivOrchestrion[index].checked = data[index].checked

      // if there are recipe items, map ingredient checkmarks
      if (_.has(data[index], 'source.recipeItems') && data[index].source.recipeItems.length){
        _.forEach(data[index].source.recipeItems, function (ingredient, ingredientIndex) {
          localStorage.ffxivOrchestrion[index].ingredients[ingredientIndex] = !!ingredient.checked;
        });
      }
    }
  }

});
