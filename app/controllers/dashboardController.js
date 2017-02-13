/**
 * Created by msav on 2/8/2017.
 */
var app = angular.module("dmsApp");

app.controller("dashboardController", function ($scope, $location, cssInjector) {
    var vm = this;

    cssInjector.add("../css/dashboard.css");

    $scope.templates = [
        { name: 'activites', url: '../partials/activities.html'},
        { name: 'processes', url: '../partials/processes.html'}
    ];

    $scope.template = $scope.templates[0];

    $scope.showProcessesTab = function(){
        $scope.template = $scope.templates[1];
    }

    $scope.showActivitiesTab = function () {
        $scope.template = $scope.templates[0];
    }
});