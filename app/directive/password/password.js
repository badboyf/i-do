'use strict';

angular.module('fzk.directive.password', []).directive('password', function () {
    return {
        restrict: 'A',
        templateUrl: 'directive/password/password.html',
        scope: {password: '=value'},
        link: function (scope, element, attr) {
            scope.$watch('password', function (newV, oldV) {

            })
        }
    }
});