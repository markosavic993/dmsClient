/**
 * Created by PredragiNenad on 2/25/2017.
 */
var app = angular.module("dmsApp");

app.controller('processesStructureController', function ($scope, configService, activityService, processService, dashboardService, documentService, toastr) {

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
        documentService.getTypesForCompany(configService.getConfig().company.vat).then(function (response) {
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


    function doesAlreadyExist(process) {
        for(p in configService.getConfig().processes) {
            if(configService.getConfig().processes[p].processName == process.processName) {
                return true;
            }
        }

        return false;
    }

    $scope.addProcess = function (process, processType) {

        process.parentProcess = $scope.parentProcess;


        if(process.processName == undefined || process.processName == "") {
            toastr.error("Process name must be provided!", "Failure!");
            return;
        }

        if(process.parentProcess == undefined || process.parentProcess.processName == ""){
            process.parentProcess = null;
        }
        if(doesAlreadyExist(process)) {
           toastr.error("Process already exists.", "Failure!");
            return;
        }
        if (processType.typeName == "Primitive") {
            process.type = "PrimitiveProcess";
            processService.addPrimitiveProcess(process).then(function () {
                toastr.success("Primitive process successfully created!")
                reloadProcesses();
            });
        } else {
            process.type = "ComplexProcess";
            processService.addComplexProcess(process).then(function () {
                toastr.success("Complex process successfully created!")
                reloadProcesses();
            });
        }
    }

    function activityAlreadyExist(activity) {

        configService.retrieveActivities();
        for(a in configService.getConfig().activities) {
            if(activity.activityName == configService.getConfig().activities[a].activityName) {
                return true;
            }
        }

        return false;
    }

    $scope.addActivity = function(activity){
        activity.process = $scope.process;
        if(activity.activityName == undefined || activity.activityName == "") {
            toastr.error("Activity name must be provided.","Failure!");
            return;
        }
        if(activityAlreadyExist(activity)) {
            toastr.error("Activity already exists!", "Failure!");
            return;
        }
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
