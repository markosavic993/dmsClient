/**
 * Created by msav on 2/8/2017.
 */
var app = angular.module("dmsApp");

app.controller("dashboardController", function ($location, cssInjector) {
    var vm = this;

    cssInjector.add("../css/dashboard.css");
});