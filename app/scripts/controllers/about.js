'use strict';

/**
 * @ngdoc function
 * @name angappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angappApp
 */
angular.module('angappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
