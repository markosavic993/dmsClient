/**
 * Created by msav on 2/8/2017.
 */
var app = angular.module("dmsApp");

app.directive("dmsMenu", function () {
    return {
        restrict: 'E',
        templateUrl: "../partials/menu.html",
        controller: "menuController"
    }
});