'use strict';

/**
 * @ngdoc function
 * @name FantasyAdventureSheet.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('FantasyAdventureSheet')
  .controller('HomeController', function($scope, ExampleService) {

    function Statistic(name) {
      this.name = name;
      this.initialValue = 0;
      this.currentValue = 0;
    }

    $scope.myHTML = null;
    $scope.statistics = [
      new Statistic('Skill'),
      new Statistic('Stamina'),
      new Statistic('Luck'),
    ];

    // just an example...
    $scope.fetchRandomText = function() {
      ExampleService.doSomethingAsync()
        .then(ExampleService.fetchSomethingFromServer)
        .then(function(response) {
            $scope.myHTML = response.data.text;
            // close pull to refresh loader
            $scope.$broadcast('scroll.refreshComplete');
        });
    };

    $scope.fetchRandomText();

  });
