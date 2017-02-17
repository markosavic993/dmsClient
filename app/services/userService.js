/**
 * Created by msav on 2/16/2017.
 */
var app = angular.module("dmsApp");

app.factory("userService", function ($http, configService) {
    return {
        loadUsers: function (vat) {
            $http.get("http://localhost:8080/user/loadusers/" + vat)
                .then(function (response) {
                    configService.getConfig().users = response.data;
                }, function (error) {
                    //TODO handle error response
                })
        }
    }
});