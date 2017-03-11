/**
 * Created by msav on 2/26/2017.
 */
var app = angular.module("dmsApp");
app.controller('documentTypesController', ['$scope', 'fileUploadService', 'configService', 'documentService',
    function($scope, fileUploadService, configService, documentService){

    function emptyFormFields() {
        $("#typeName").val("");
        $("#typeDescription").val("");
    }

    $scope.uploadFile = function(documentType){
        var file = $scope.myFile;
        console.log('file is ' );
        console.dir(file);
        documentType.company = configService.getConfig().company;
        fileUploadService.uploadFileToUrl(file, documentType);
        emptyFormFields();
    };

    $scope.getDocumentTypesForCompany = function(){
        var vat = configService.getConfig().company.vat;
        documentService.getTypesForCompany(vat);
    }

}]);