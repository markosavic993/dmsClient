/**
 * Created by msav on 2/4/2017.
 */
var app = angular.module("dmsApp");

app.controller("registrationFormController", function (configService,registrationService, $scope, $location, cssInjector) {
    var vm = this;
    cssInjector.add("../css/style.css");

    $scope.configService = configService;

    vm.handleLoginRequest = function (loginInfo) {
        registrationService.login(loginInfo);
    }

    vm.handleSignupRequest = function (signupInfo) {
        registrationService.signup(signupInfo);
    }

    vm.handleCompanyRegistration = function (companyInfo) {
        registrationService.registerCompany(companyInfo);
    }
});