/**
 * Created by PredragiNenad on 3/12/2017.
 */
var app = angular.module("dmsApp");

app.factory("processService", function ($http, configService) {
    return {
        addComplexProcess: function(process){
            process.company = configService.getConfig().company;
            return $http.post("http://localhost:8080/process/complex/add",process);
        },
        addPrimitiveProcess: function(process){
            process.company = configService.getConfig().company;
            return $http.post("http://localhost:8080/process/primitive/add",process);
        },
        deleteProcess: function(process){
            return $http.post("http://localhost:8080/process/delete/",process);
        }
    }
});