'use strict';

app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $stateProvider.state('loginOrRegister', {
        url: '/loginOrRegister',
        templateUrl: '/src/loginOrRegister/loginOrRegister.html',
        controller: 'loginOrRegister',
        abstract: true
    });
}]).controller('loginOrRegister', [function () {

}]);