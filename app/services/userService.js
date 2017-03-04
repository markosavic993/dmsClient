/**
 * Created by msav on 2/16/2017.
 */
var app = angular.module("dmsApp");

app.factory("userService", function ($http, configService, $q) {
    return {
        loadUsers: function (vat) {
            return $http.get("http://localhost:8080/dms/user/loadusers/" + vat);
        },
        updateUser: function (user) {
            return $http.post("http://localhost:8080/dms/user/update", user);
        },
        deleteUser: function (user) {
            return $http.post("http://localhost:8080/dms/user/delete", user);
        },
        addEmployee: function (employee) {
            return $http.post("http://localhost:8080/dms/user/addEmployee", employee);
        }
    }
});