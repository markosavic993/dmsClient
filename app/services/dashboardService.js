/**
 * Created by Pejovic on 14.2.2017.
 */
var app = angular.module("dmsApp");

app.factory("dashboardService", function (configService, $location) {
    return {
        logOut: function () {
            configService.resolveUser();
            $location.path('/');
        },
        loadProcesses: function(){
            $http.get("http://localhost:8080/process/"+configService.getConfig().company.vat).then(function (response) {
                if (response != null) {
                    configService.getConfig().processes = response.data;
                } else {
                    //to do
                }
            });
        }
    }
});