'use strict';

angular.module('fzk.directive.username', []).directive('username', function () {
    return {
        restrict: 'A',
        templateUrl: 'directive/username/username.html',
        //scope : {username : '=usernameValue'},
        scope: false,
        link: function (scope, element, attr) {
            scope.valueChange = function () {
                //console.log(scope.data.username);
            }
        }
    }
});