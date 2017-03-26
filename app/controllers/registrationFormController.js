/**
 * Created by msav on 2/4/2017.
 */
var app = angular.module("dmsApp");

app.controller("registrationFormController", function (configService,registrationService, dashboardService, $scope, $location, cssInjector) {
    var vm = this;
    cssInjector.add("../css/style.css");

    $scope.configService = configService;


    vm.handleLoginRequest = function (loginInfo) {
        configService.readHost();

        if(loginInfo != undefined && loginInfo.username != undefined && loginInfo.password != undefined) {
            registrationService.login(loginInfo);
        }
    }

    vm.handleSignupRequest = function (signupInfo) {
        configService.readHost();

        if(signupInfo != undefined && signupInfo.firstName != undefined && signupInfo.lastName != undefined && signupInfo.username != undefined && signupInfo.password != undefined) {
            registrationService.signup(signupInfo);
        }
    }

    vm.handleCompanyRegistration = function (companyInfo) {
        if(companyInfo != undefined && companyInfo.companyName != undefined && companyInfo.officeLocationCity != undefined && companyInfo.officeLocationStreet != undefined && companyInfo.officeLocationStreetNumber != undefined && companyInfo.vat != undefined ) {
            registrationService.registerCompany(companyInfo);
        }
    }

    vm.resolveError = function () {
        configService.resolveError();
    }
});