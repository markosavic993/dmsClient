/**
 * Created by Pejovic on 14.2.2017.
 */
var app = angular.module("dmsApp");

app.factory("dashboardService", function (configService, $location) {
    return {
        logOut: function () {
            configService.resolveUser();
            $location.path('/');
        }
    }
});