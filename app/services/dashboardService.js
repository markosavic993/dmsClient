/**
 * Created by Pejovic on 14.2.2017.
 */
var app = angular.module("dmsApp");

app.factory("dashboardService", function ($http,configService, $location) {
    return {
        logOut: function () {
            configService.resolveUser();
            $location.path('/');
        },
        loadProcesses: function(){
            return $http.get("http://localhost:8080/process/"+configService.getConfig().company.vat);

        },
        loadDocuments: function(){
            return $http.get(configService.getConfig().host+"/document/"+configService.getConfig().company.vat);
        }
    }
});