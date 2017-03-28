/**
 * Created by msav on 3/27/2017.
 */
var app = angular.module("dmsApp")
app.service('fileDownloadService', ['$http', 'toastr', 'configService', function ($http, toastr, configService) {
    return {
        downloadFile: function (activity) {
            return $http.post(configService.getConfig().host+"/document/fileDownload", activity);
        }
    }
}]);