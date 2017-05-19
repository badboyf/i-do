'use strict';

app.factory('UserInterceptor', ["$rootScope", "$cookies", function ($rootScope, $cookies) {
    return {
        request: function (config) {
            console.log("config");
            console.log(config);
            //$rootScope.user.username = $cookies.getObject('user').username;
            //console.log($rootScope.user.username);
            config.headers["TOKEN"] = $rootScope.user.username;
            return config;
        }
        //,
        //responseError: function (response) {
        //    console.log('response');
        //    console.log(response);
        //    var data = response.data;
        //    if (data["errorCode"] == "1") {
        //        $rootScope.user.token = "";
        //        $rootScope.$emit("userIntercepted", "notLogin", response);
        //    }
        //    if (data["errorCode"] == "2") {
        //        $rootScope.$emit("userIntercepted", "sessionOut", response);
        //    }
        //    return $q.reject(response);
        //}
    };
}]);