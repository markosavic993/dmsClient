/**
 * Created by msav on 2/5/2017.
 */
var app = angular.module("dmsApp");

app.factory("registrationService", function ($http) {
    return {
        login: function (loginInfo) {
            return $http.post("http://localhost:8080/dms/user/login", loginInfo);
        },
        signup: function (signupInfo) {
            return $http.post("http://localhost:8080/dms/user/signup", signupInfo);
        },
        registerCompany: function (companyInfo) {
            return $http.post("http://localhost:8080/dms/company/register", companyInfo);
        }
    }
});