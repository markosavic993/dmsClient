/**
 * Created by msav on 2/4/2017.
 */
var app = angular.module("dmsApp");

app.controller("registrationFormController", function ($scope, registrationService) {
    $scope.user = undefined;

    $scope.handleLoginRequest = function (loginInfo) {
        console.log(loginInfo);
        registrationService.login(loginInfo);
    }

    $scope.handleSignupRequest = function (signupInfo) {
        console.log(signupInfo);
        registrationService.signup(signupInfo);
    }
});