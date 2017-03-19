/**
 * Created by PredragiNenad on 3/12/2017.
 */
var app = angular.module("dmsApp");

app.factory("activityService", function ($http, configService) {
    return {
        addActivity: function(activity){
            return $http.post("http://localhost:8080/dms/activity/add",activity);
        },
        deleteActivity: function(activity){
            return $http.post("http://localhost:8080/dms/activity/delete",activity);
        }
    }
});
