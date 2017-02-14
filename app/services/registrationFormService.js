/**
 * Created by msav on 2/5/2017.
 */
var app = angular.module("dmsApp");

app.factory("registrationService", function ($http, configService, $location) {
    return {
        login: function (loginInfo) {
            $http.post("http://localhost:8080/dms/user/login", loginInfo).then(function (response) {
                if (response != null) {
                    configService.getConfig().username = response.data.username;
                    if (response.data.company != null) {
                        configService.getConfig().company = response.data.company;
                    }
                    configService.getConfig().loggedIn = true;
                    $location.path('/dashboard');
                } else {
                    //to do
                }
            });
        },
        signup: function (signupInfo) {
            $http.post("http://localhost:8080/dms/user/signup", signupInfo).then(function (response) {
                if (response != null) {
                    configService.getConfig().username = response.data.username;
                    if (response.data.company != null) {
                        configService.getConfig().company = response.data.company;
                    }
                    configService.getConfig().successfullySignedUp=true;
                    configService.getConfig().loggedIn = true;
                } else {
                    //to do
                }
            });
        },
        registerCompany: function (companyInfo) {
            $http.post("http://localhost:8080/dms/company/register", companyInfo).then(function(response){
                //to do
                $location.path('/dashboard');
            });
        }
    }
});