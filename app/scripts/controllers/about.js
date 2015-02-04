'use strict';

/**
 * @ngdoc function
 * @name buildingAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the buildingAngularApp
 */
angular.module('buildingAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
