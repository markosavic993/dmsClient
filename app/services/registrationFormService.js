/**
 * Created by msav on 2/5/2017.
 */
var app = angular.module("dmsApp");

app.factory("registrationService", function ($http) {
    return {
        login: function (loginInfo) {
            $http.post("http://localhost:8080/user/login", loginInfo)
                .then(function ($data) {
                        console.log($data);
                    }, function () {
                        console.log("Fail");
                    }
                );
        },
        signup: function (signupInfo) {
            $http.post("http://localhost:8080/user/signup", signupInfo)
                .then(function ($data) {
                        console.log($data);
                    }, function () {
                        console.log("Fail");
                    }
                );
        }
    }
});