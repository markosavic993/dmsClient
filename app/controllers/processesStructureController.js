/**
 * Created by PredragiNenad on 2/25/2017.
 */
var app = angular.module("dmsApp");

app.controller('processesStructureController', function ($scope, configService, activityService, processService, dashboardService) {

    $scope.activity = {inputDocument:null,outputDocument: null,process:null};
    $scope.process = {parentProcess: {processName: ""}}
    $scope.modalTemplates = [
        {name: 'add_activity', url: '../partials/modal_add_activity.html'},
        {name: 'add_process', url: '../partials/modal_add_process.html'}
    ];

    $scope.types = [
        {typeName : "Complex"},
        {typeName: "Primitive"}
    ];

    $scope.modalTemplate = $scope.modalTemplates[0];

    $scope.openAddActivityModal = function (process) {
        dashboardService.loadDocuments().then(function(response){
            $scope.documents = response.data;
            $scope.activity.inputDocument = $scope.documents[0];
            $scope.activity.outputDocument = $scope.documents[0];
        });
        $scope.process = process;
        $scope.modalTemplate = $scope.modalTemplates[0];
    }

    $scope.openAddProcessModal = function (process) {
        $scope.parentProcess = process;
        $scope.modalTemplate = $scope.modalTemplates[1];
    }
    $scope.addProcess = function (process, processType) {

        process.parentProcess = $scope.parentProcess;

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

    $scope.addActivity = function(activity){
        activity.process = $scope.process;
        activityService.addActivity(activity).then(function(){
            reloadProcesses();
        })
    }

    $scope.deleteActivity = function(activity){
        activityService.deleteActivity(activity).then(function(){
            reloadProcesses();
        });
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
                configService.retrievePrimitiveProcesses();
                $scope.primitiveProcesses = configService.getConfig().primitiveProcesses;
            } else {
                //to do
            }
        })
    }
});
