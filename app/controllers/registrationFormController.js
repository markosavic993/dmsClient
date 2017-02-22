/**
 * Created by msav on 2/4/2017.
 */
var app = angular.module("dmsApp");

app.controller("registrationFormController", function (configService,registrationService, $scope, $location, cssInjector) {
    var vm = this;
    cssInjector.add("../css/style.css");

    $scope.configService = configService;

    vm.handleLoginRequest = function (loginInfo) {
        if(signupInfo != undefined && signupInfo.username != undefined && signupInfo.password != undefined) {
            registrationService.login(loginInfo);
        }
    }

    vm.handleSignupRequest = function (signupInfo) {
        if(signupInfo != undefined && signupInfo.firstName != undefined && signupInfo.lastName != undefined && signupInfo.username != undefined && signupInfo.password != undefined) {
            registrationService.signup(signupInfo);
        }
    }

    vm.handleCompanyRegistration = function (companyInfo) {
        if(signupInfo != undefined && signupInfo.companyName != undefined && signupInfo.officeLocationCity != undefined && signupInfo.officeLocationStreet != undefined && signupInfo.officeLocationNumber != undefined && signupInfo.vat != undefined ) {
            registrationService.registerCompany(companyInfo);
        }
    }
});