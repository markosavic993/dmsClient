/**
 * Created by PredragiNenad on 2/25/2017.
 */
var app = angular.module("dmsApp");

app.controller('processesStructureController', function ($scope, configService, processService) {

    $scope.modalTemplates = [
        { name: 'add_activity', url: '../partials/modal_add_activity.html'},
        { name: 'add_process', url: '../partials/modal_add_process.html'}
    ];

    $scope.modalTemplate = $scope.modalTemplates[0];

    $scope.openAddActivityModal = function(){
        $scope.modalTemplate = $scope.modalTemplates[0];
    }

    $scope.openAddProcessModal = function(){
        $scope.modalTemplate = $scope.modalTemplates[1];
    }

    $scope.addProcess = function(process){
        if(process.parentProcess == null){
            processService.addPrimitiveProcess(process).then(function () {
                //to do
            });
        } else {
            processService.addComplexProcess(process).then(function () {
                //to do
            });
        }
    }
});