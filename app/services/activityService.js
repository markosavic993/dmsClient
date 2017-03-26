/**
 * Created by PredragiNenad on 3/12/2017.
 */
var app = angular.module("dmsApp");

app.factory("activityService", function ($http, configService) {
    return {
        addActivity: function(activity){
            return $http.post(configService.getConfig().host+"/activity/add",activity);
        },
        deleteActivity: function(activity){
            return $http.post(configService.getConfig().host+"/activity/delete",activity);
        }
    }
});
