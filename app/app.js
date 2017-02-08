/**
 * Created by msav on 2/4/2017.
 */
"use strict";

var app = angular.module("dmsApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/registration_form.html",
            controller: "registrationFormController"
        })
        .when("/dashboard", {
            templateUrl: "partials/dashboard.html"
        })
        .otherwise({
                templateUrl: "partials/notFound.html"
            }
        )
});