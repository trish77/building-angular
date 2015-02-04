'use strict';

/**
 * @ngdoc function
 * @name buildingAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of
 * the buildingAngularApp
 */
angular.module('buildingAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
