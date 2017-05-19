'use strict';

app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('loginOrRegister.login', {
        url: '/login',
        templateUrl: '/src/loginOrRegister/login/login.html',
        controller: 'loginC'
    }).state('loginOrRegister.login2', {
        url: '/login/:username',
        templateUrl: '/src/loginOrRegister/login/login.html',
        controller: 'loginC'
    });
}]);
app.controller('loginC', ['$rootScope', '$scope', '$state', '$stateParams', '$cookies', function ($rootScope, $scope, $state, $stateParams, $cookies) {
    $scope.data = {};
    $scope.func = {};

    $scope.data.username = $stateParams.username;
    $scope.func.goMain = function () {
        $rootScope.user = {};

        $cookies.putObject('user', {username: $scope.data.username});
        $rootScope.user.username = $scope.data.username;
        $state.go('main');
    };
}]);