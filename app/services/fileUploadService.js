/**
 * Created by msav on 2/26/2017.
 */
var app = angular.module("dmsApp")
app.service('fileUploadService', ['$http', 'toastr', 'configService', function ($http, toastr, configService) {
    this.uploadFileToUrl = function (file, documentTypeData) {
        var fd = new FormData();
        fd.append('file', file);
        $http.post(configService.getConfig().host+"/document/fileUpload/" + configService.getConfig().company.vat, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
            .success(function (responseDocumentType) {
                documentTypeData.originalFilename = file.name;
                $http.post("http://localhost:8080/document/filedata", documentTypeData)
                    .success(function (response) {
                        toastr.success("Document type successfully uploaded!");
                    })
                    .error(function (data) {
                        toastr.error(data);
                    });
            })
            .error(function () {
                toastr.error("Document type upload failed!", "Error");
            });
    }

    this.uploadDocument = function (file, activity) {
        var fd = new FormData();
        fd.append('file', file);
        $http.post(configService.getConfig().host+"/document/upload/" + configService.getConfig().company.vat + "/" + activity.outputDocumentType.documentTypeId, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
            .success(function (respocnseDocument) {
                toastr.success("Document successfully uploaded!")
            })
    }
}]);