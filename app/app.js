/**
 * Created by msav on 2/4/2017.
 */
"use strict";

var app = angular.module("dmsApp", ["ngRoute", "angular.css.injector"]);

app.config(function ($routeProvider, cssInjectorProvider) {

    cssInjectorProvider.setSinglePageMode(true);

    $routeProvider
        .when("/", {
            templateUrl: "partials/registration_form.html",
            controller: "registrationFormController"
        })
        .when("/dashboard", {
            templateUrl: "partials/dashboard.html",
            controller: "dashboardController"
        })
        .otherwise({
                templateUrl: "partials/notFound.html"
            }
        )
});