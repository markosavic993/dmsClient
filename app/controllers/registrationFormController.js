/**
 * Created by msav on 2/4/2017.
 */
var app = angular.module("dmsApp");

app.controller("registrationFormController", function ($scope, registrationService, $location, cssInjector) {
    cssInjector.add("../css/style.css");

    $scope.user = undefined;
    $scope.company = undefined;
    $scope.successfullySignedUp = false;

    $scope.handleLoginRequest = function (loginInfo) {
        registrationService.login(loginInfo)
            .success(function ($data) {
                console.log("Success: " + $data);
                $scope.user = $data;
            }).error(function ($data) {
                console.log("Fail: " + $data);
                $scope.user = loginInfo;
            }
        );
    }

    $scope.handleSignupRequest = function (signupInfo) {
        registrationService.signup(signupInfo)
            .success(function ($data) {
                console.log("Success: " + $data);
                $scope.user = $data;
                $scope.successfullySignedUp = true;
            }).error(function ($data) {
                console.log("Fail: " + $data);
                $scope.user = loginInfo;
            }
        );
    }

    $scope.handleCompanyRegistration = function (companyInfo) {
        console.log(companyInfo);
        companyInfo.user = $scope.user;
        registrationService.registerCompany(companyInfo)
            .success(function ($data) {
                $scope.company = $data;
                $scope.user.company = $scope.company;
                console.log($scope.company);
                $location.path("/dashboard");
            })
            .error(function ($data) {
                console.log("Error occured while creating company: " + $data);
            });
    }
});