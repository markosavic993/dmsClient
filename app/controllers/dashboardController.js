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
        { name: "documentTypes", url: '../partials/documentTypes.html'},
        { name: 'help', url: '../partials/help.html'},
        { name: 'profile', url: '../partials/profile.html'},
        { name: 'dashboard', url: '../partials/start_page.html'}
    ];

    $scope.template = $scope.templates[7];

    $scope.showActivitiesTab = function() {
        if (configService.getConfig().activities == undefined){
            dashboardService.loadProcesses().then(function (response) {
                if (response != null) {
                    configService.getConfig().processes = response.data;
                    $scope.processes = response.data;
                    configService.retrieveActivities()
                    $scope.activities = configService.getConfig().activities;
                    $scope.template = $scope.templates[0];
                } else {
                    //to do
                }
            });
    } else {
        $scope.activities = configService.getConfig().activities;
        $scope.template = $scope.templates[0];
    }
    }

    $scope.showProcessesTab = function(){
        if(configService.getConfig().processes == undefined) {
            dashboardService.loadProcesses().then(function (response) {
                if (response != null) {
                    configService.getConfig().processes = response.data;
                    $scope.processes = response.data;
                } else {
                    //to do
                }
                $scope.template = $scope.templates[1];
            })
        } else {
            $scope.template = $scope.templates[1];
        }
    }

    $scope.showProcessesStructure = function(){
        if(configService.getConfig().processes == undefined) {
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
                $scope.template = $scope.templates[3];
            })
        } else {
            $scope.processes = configService.getConfig().processes;
            $scope.structuredProcesses = configService.getConfig().structuredProcesses;
            $scope.template = $scope.templates[3];
        }
    }

    $scope.showEmployeesTab = function () {
        $scope.template = $scope.templates[2];
    }

    $scope.showDocumentsTypes = function () {
        $scope.template = $scope.templates[4];
    }

    $scope.showHelpTab = function () {
        $scope.template = $scope.templates[5];
    }

    $scope.showProfileTab = function () {
        $scope.template = $scope.templates[6];
    }

    $scope.logOut = function(){
        dashboardService.logOut();
    }
});