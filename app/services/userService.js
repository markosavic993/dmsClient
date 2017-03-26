/**
 * Created by msav on 2/16/2017.
 */
var app = angular.module("dmsApp");

app.factory("userService", function ($http, configService, $q) {
    return {
        loadUsers: function (vat) {
            return $http.get(configService.getConfig().host+"/user/loadusers/" + vat);
        },
        updateUser: function (user) {
            return $http.post(configService.getConfig().host+"/user/update", user);
        },
        deleteUser: function (user) {
            return $http.post(configService.getConfig().host+"/user/delete", user);
        },
        addEmployee: function (employee) {
            return $http.post(configService.getConfig().host+"/user/addEmployee", employee);
        },
        changeUserPassword: function (user) {
            return $http.post(configService.getConfig().host+"/user/changePassword", user);
        }
    }
});