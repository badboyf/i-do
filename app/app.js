'use strict';

var app = angular.module('myApp', [
    'ui.router', 'fzk.directive', 'ngCookies'
]);

app.config(['$urlRouterProvider', '$stateProvider', '$httpProvider', function ($urlRouterProvider, $stateProvider, $httpProvider) {

    $urlRouterProvider.otherwise('loginOrRegister/login');
    $httpProvider.interceptors.push('UserInterceptor');
}]);

app.run(['$rootScope', '$state', '$stateParams', '$cookies', function ($rootScope, $state, $stateParams, $cookies) {
    $rootScope.$on('$stateChangeStart', function (event, to, toParams, from, fromParams) {
        console.log('stateChangeStart');
        console.log($rootScope.user);
        if (to.url == '/login' || to.url == '/register') return;

        $cookies.getObject('user')
        var username = $cookies.getObject('user').username;

        if (username == '') {
            event.preventDefault();
            $state.go('loginOrRegister.login', $stateParams);
        } else {
            $cookies.putObject('user', {username: username}, {expires: new Date(new Date().getTime() + 3600)});
            $rootScope.user.username = username;
        }
    });
    $rootScope.user = {username: ''};
    $rootScope.$on('userIntercepted', function (errorType) {
        $state.go("login", {from: $state.current.name, w: errorType});
    });
}]);