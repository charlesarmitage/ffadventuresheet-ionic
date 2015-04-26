'use strict';

/**
 * @ngdoc function
 * @name FantasyAdventureSheet.util:lodash
 * @description
 * # Lo-Dash
 * Expose Lo-Dash through injectable factory, so we don't pollute / rely on global namespace
 * just inject lodash as _
 */

angular.module('FantasyAdventureSheet')
  .factory('_', function($window) {
    return $window._;
  });
