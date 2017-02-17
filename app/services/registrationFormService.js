/**
 * Created by msav on 2/5/2017.
 */
var app = angular.module("dmsApp");

app.factory("registrationService", function ($http, configService, $location, userService) {
    return {
        login: function (loginInfo) {
            $http.post("http://localhost:8080/user/login", loginInfo).then(function (response) {
                if (response != null) {
                    configService.getConfig().user = response.data;
                    configService.getConfig().company = response.data.company;
                    configService.getConfig().loggedIn = true;
                    $location.path('/dashboard');
                } else {
                    //to do
                }
            });
        },
        signup: function (signupInfo) {
            $http.post("http://localhost:8080/user/signup", signupInfo).then(function (response) {
                if (response != null) {
                    configService.getConfig().user = response.data;
                    configService.getConfig().successfullySignedUp=true;
                    configService.getConfig().loggedIn = true;
                } else {
                    //to do
                }
            });
        },
        registerCompany: function (companyInfo) {
            companyInfo.user = configService.getConfig().user;
            $http.post("http://localhost:8080/company/register", companyInfo).then(function(response){
                //to do
                configService.getConfig().company = response.data;
                configService.getConfig().user.company = response.data;
                userService.updateUser(configService.getConfig().user);
                $location.path('/dashboard');
            });
        }
    }
});