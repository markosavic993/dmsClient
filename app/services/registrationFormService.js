/**
 * Created by msav on 2/5/2017.
 */
var app = angular.module("dmsApp");

app.factory("registrationService", function ($http) {
    return {
        login: function (user) {
            $http.post("http://localhost:8080/user/login", user)
                .then(function ($data) {
                        console.log($data);
                    }, function () {
                        console.log("Fail");
                    }
                );
        },
        signup: function (user) {
            $http.post("http://localhost:8080/user/signup", user)
                .then(function ($data) {
                        console.log($data);
                    }, function () {
                        console.log("Fail");
                    }
                );
        }
    }
});