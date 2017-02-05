/**
 * Created by msav on 2/4/2017.
 */
var app = angular.module("dmsApp");

app.controller("registrationFormController", function ($scope, registrationService) {
    $scope.user = undefined;

    $scope.handleLoginRequest = function (user) {
        console.log(user);
        $scope.user = user;
        registrationService.login(user);
    }

    $scope.handleSignupRequest = function (user) {
        console.log(user);
        $scope.user = user;
        registrationService.signup(user);
    }
});