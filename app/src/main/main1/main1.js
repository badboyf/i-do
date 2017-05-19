'use strict';

app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('main.main1', {
        url: '/main1/:menuValue',
        templateUrl: '/src/main/main1/main1.html',
        controller: 'main1C'
    });
}]);
app.controller('main1C', ['$scope', '$state','$stateParams', function ($scope, $state, $stateParams) {
    $scope.data = {};
    $scope.func = {};
    $scope.data.value = $stateParams.menuValue;
}]);