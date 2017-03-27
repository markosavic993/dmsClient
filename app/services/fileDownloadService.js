/**
 * Created by msav on 3/27/2017.
 */
var app = angular.module("dmsApp")
app.service('fileDownloadService', ['$http', 'toastr', 'configService', function ($http, toastr, configService) {
    return {
        downloadFile: function (activity) {
            return $http.post("http://localhost:8080/document/fileDownload", activity, {responseType:'arraybuffer'});
        }
    }
}]);