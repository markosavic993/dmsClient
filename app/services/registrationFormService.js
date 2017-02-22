/**
 * Created by msav on 2/5/2017.
 */
var app = angular.module("dmsApp");

app.factory("registrationService", function ($http, configService, $location, userService) {
    return {
        login: function (loginInfo) {
            $http.post("http://localhost:8080/dms/user/login", loginInfo).then(function (response) {
                if (response.data != "") {
                    configService.getConfig().user = response.data;
                    configService.getConfig().company = response.data.company;
                    configService.getConfig().loggedIn = true;
                    configService.resolveError();
                    $location.path('/dashboard');
                } else {
                    //to do
                    configService.getConfig().error = true;
                    configService.getConfig().errorMessage = "User with entered username does not exists!";
                }
            });
        },
        signup: function (signupInfo) {
            $http.post("http://localhost:8080/dms/user/signup", signupInfo).then(function (response) {
                if (response.data != "") {
                    configService.getConfig().user = response.data;
                    configService.getConfig().successfullySignedUp=true;
                    configService.getConfig().loggedIn = true;
                    configService.resolveError();
                } else {
                    configService.getConfig().successfullySignedUp=false;
                    configService.getConfig().error = true;
                    configService.getConfig().errorMessage = "User with entered username already exists!";
                }
            });
        },
        registerCompany: function (companyInfo) {
            companyInfo.user = configService.getConfig().user;
            $http.post("http://localhost:8080/dms/company/register", companyInfo).then(function(response){
                if(response.data != ""){
                    configService.getConfig().company = response.data;
                    configService.getConfig().user.company = response.data;
                    userService.updateUser(configService.getConfig().user);
                    configService.resolveError();
                    $location.path('/dashboard');
                } else {
                    configService.getConfig().error = true;
                    configService.getConfig().errorMessage = "Company with entered vat already exists!";
                }
            });
        }
    }
});