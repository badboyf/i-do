'use strict';

app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('loginOrRegister.register', {
        url: '/register',
        templateUrl: '/src/loginOrRegister/register/register.html',
        controller: 'registerC'
    });
}]);

app.controller('registerC', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
    $scope.func = {};
    $scope.data = {};
    $scope.func.goLogin = function () {
        if (!$scope.func.checkPassword()) return;
        $stateParams.username = $scope.data.username;
        $state.go('loginOrRegister.login2', $stateParams);
    };

    $scope.func.checkPassword = function () {
        if ($scope.data.password != $scope.data.passwordConfirm) {
            $scope.data.passwordMessage = "two password not same";
            return false;
        }
        return true;
    };
    $scope.$watch('data.passwordConfirm', function (newValue, oldValue) {
        $scope.data.passwordMessage = "";
    });

}]);