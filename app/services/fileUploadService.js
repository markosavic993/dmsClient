/**
 * Created by msav on 2/26/2017.
 */
var app = angular.module("dmsApp")
app.service('fileUploadService', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, documentTypeData){
        var fd = new FormData();
        fd.append('file', file);
        $http.post("http://localhost:8080/document/fileUpload", fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
            .success(function(responseDocumentType){
                documentTypeData.id = responseDocumentType.id;
                $http.post("http://localhost:8080/document/filedata", documentTypeData)
                    .success(function (response) {

                    })
                    .error(function(response) {

                    });
            })
            .error(function(){
            });
    }
}]);