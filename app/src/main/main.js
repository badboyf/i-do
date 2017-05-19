'use strict';

app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $stateProvider.state('main', {
        url: '/main',
        templateUrl: '/src/main/main.html',
        controller: 'mainC'
    });
    //$urlRouterProvider.otherwise('loginOrRegister/login');
}]);
app.controller('mainC', ['$rootScope', '$scope', '$state', '$stateParams', '$cookies', function ($rootScope, $scope, $state, $stateParams, $cookies) {
    $scope.data = {};
    $scope.func = {};
    $scope.data.username = $rootScope.user.username;
    $scope.data.menus = [{'value': 'menu1', 'class': ''},
        {'value': 'menu2', 'class': ''},
        {'value': 'menu3', 'class': ''},
        {'value': 'menu4', 'class': ''},
        {'value': 'menu5', 'class': ''},
        {'value': 'menu6', 'class': ''}];

    $scope.func.logout = function () {
        $cookies.getObject('user').username = '';
        //$rootScope.user.username = '';
    };
    $scope.func.menuOnClick = function (menuIndex) {
        var menuValue = null;
        $scope.data.menus.forEach(function (value, index, array) {
            if (menuIndex == index) {
                $scope.data.menus[index].class = 'active';
                menuValue = $scope.data.menus[index].value;
            } else {
                $scope.data.menus[index].class = '';
            }
        });
        $stateParams.menuValue = menuValue;
        $state.go('main.main1', $stateParams);
    };
}]);