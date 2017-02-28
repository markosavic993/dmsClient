/**
 * Created by msav on 2/26/2017.
 */
var app = angular.module("dmsApp");
app.controller('documentTypesController', ['$scope', 'fileUploadService', function($scope, fileUploadService){

    $scope.uploadFile = function(documentType){
        var file = $scope.myFile;
        console.log('file is ' );
        console.dir(file);
        fileUploadService.uploadFileToUrl(file, documentType);
    };

}]);