/**
 * Created by msav on 2/4/2017.
 */
var app = angular.module("dmsApp");

app.controller("registrationFormController", function (registrationService, $location, cssInjector) {
    var vm = this;
    cssInjector.add("../css/style.css");

    vm.user = undefined;
    vm.company = undefined;
    vm.successfullySignedUp = false;

    vm.handleLoginRequest = function (loginInfo) {
        registrationService.login(loginInfo)
            .success(function ($data) {
                console.log("Success: " + $data);
                vm.user = $data;
            }).error(function ($data) {
                console.log("Fail: " + $data);
                vm.user = loginInfo;
            }
        );
    }

    vm.handleSignupRequest = function (signupInfo) {
        registrationService.signup(signupInfo)
            .success(function ($data) {
                console.log("Success: " + $data);
                vm.user = $data;
                vm.successfullySignedUp = true;
            }).error(function ($data) {
                console.log("Fail: " + $data);
                vm.user = loginInfo;
            }
        );
    }

    vm.handleCompanyRegistration = function (companyInfo) {
        console.log(companyInfo);
        companyInfo.user = vm.user;
        registrationService.registerCompany(companyInfo)
            .success(function ($data) {
                vm.company = $data;
                vm.user.company = vm.company;
                console.log(vm.company);
                $location.path("/dashboard");
            })
            .error(function ($data) {
                console.log("Error occured while creating company: " + $data);
            });
    }
});