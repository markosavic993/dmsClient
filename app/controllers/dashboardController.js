/**
 * Created by msav on 2/8/2017.
 */
var app = angular.module("dmsApp");

app.controller("dashboardController", function ($scope, configService, dashboardService, $location, cssInjector) {
    var vm = this;

    cssInjector.add("../css/dashboard.css");

    $scope.configService = configService;
    $scope.processes = undefined;
    $scope.structuredProcesses = undefined;

    $scope.templates = [
        { name: 'activities', url: '../partials/activities.html'},
        { name: 'processes', url: '../partials/processes.html'},
        { name: 'users', url: '../partials/employees.html'},
        { name: 'processes_structure', url: '../partials/processes_structure.html'},
        { name: "documentTypes", url: '../partials/documentTypes.html'}
    ];

    $scope.template = $scope.templates[0];

    $scope.showProcessesTab = function(){
        if(configService.getConfig().processes == undefined) {
            dashboardService.loadProcesses().then(function (response) {
                if (response != null) {
                    configService.getConfig().processes = response.data;
                    $scope.processes = response.data;
                } else {
                }
                $scope.template = $scope.templates[1];
            })
        } else {
            $scope.template = $scope.templates[1];
        }
    }

    $scope.showActivitiesTab = function () {
        for(i=0;i<configService.getConfig().structuredProcesses;i++){
            console.log(configService.getConfig().structuredProcesses[i]);
        }
        $scope.template = $scope.templates[0];
    }

    $scope.showProcessesStructure = function(){
        if(configService.getConfig().processes == undefined) {
            dashboardService.loadProcesses().then(function (response) {
                if (response != null) {
                    configService.getConfig().processes = response.data;
                    configService.restructureProcesses();
                    $scope.structuredProcesses = configService.getConfig().structuredProcesses;
                } else {
                    //to do
                }
                $scope.template = $scope.templates[3];
            })
        } else {
            $scope.template = $scope.templates[3];
        }
    }

    $scope.showEmployeesTab = function () {
        $scope.template = $scope.templates[2];
    }

    $scope.showDocumentsTypes = function () {
        $scope.template = $scope.templates[4];
    }

    $scope.logOut = function(){
        dashboardService.logOut();
    }
});