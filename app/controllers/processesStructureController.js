/**
 * Created by PredragiNenad on 2/25/2017.
 */
var app = angular.module("dmsApp");

app.controller('processesStructureController', function ($scope, configService, processService, dashboardService) {

    $scope.modalTemplates = [
        {name: 'add_activity', url: '../partials/modal_add_activity.html'},
        {name: 'add_process', url: '../partials/modal_add_process.html'}
    ];

    $scope.types = [
        {typeName : "Complex"},
        {typeName: "Primitive"}
    ];

    $scope.modalTemplate = $scope.modalTemplates[0];

    $scope.openAddActivityModal = function () {
        $scope.modalTemplate = $scope.modalTemplates[0];
    }

    $scope.openAddProcessModal = function () {
        $scope.modalTemplate = $scope.modalTemplates[1];
    }

    $scope.addProcess = function (process, processType) {

        if(process.parentProcess.processName == ""){
            process.parentProcess = null;
        }
        if (processType == "primitive") {
            process.type = "PrimitiveProcess";
            processService.addPrimitiveProcess(process).then(function () {
                reloadProcesses();
            });
        } else {
            process.type = "ComplexProcess";
            processService.addComplexProcess(process).then(function () {
                reloadProcesses();
            });
        }
    }

    $scope.deleteProcess = function(process){
        processService.deleteProcess(process).then(function(response){
            reloadProcesses();
        });
    }

    function reloadProcesses() {
        dashboardService.loadProcesses().then(function (response) {
            if (response != null) {
                configService.getConfig().processes = response.data;
                configService.restructureProcesses();
                $scope.structuredProcesses = configService.getConfig().structuredProcesses;
                $scope.processes = configService.getConfig().processes;
                configService.retrieveComplexProcesses();
                $scope.complexProcesses = configService.getConfig().complexProcesses;
            } else {
                //to do
            }
        })
    }
});
