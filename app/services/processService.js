/**
 * Created by PredragiNenad on 3/12/2017.
 */
var app = angular.module("dmsApp");

app.factory("processService", function ($http, configService) {
    return {
        addComplexProcess: function(process){
            process.company = configService.getConfig().company;
            return $http.post(configService.getConfig().host+"/process/complex/add",process);
        },
        addPrimitiveProcess: function(process){
            process.company = configService.getConfig().company;
            return $http.post(configService.getConfig().host+"/process/primitive/add",process);
        },
        deleteProcess: function(process){
            return $http.post(configService.getConfig().host+"/process/delete/",process);
        }
    }
});