/**
 * Created by msav on 2/4/2017.
 */
"use strict";

var app = angular.module("dmsApp", ["ngRoute", "angular.css.injector","ui.tree"]);

app.config(function ($routeProvider, cssInjectorProvider) {

    cssInjectorProvider.setSinglePageMode(true);

    $routeProvider
        .when("/", {
            templateUrl: "partials/registration_form.html",
            controller: "registrationFormController",
            resolve: {
                factory: loginChecking
            }
        })
        .when("/dashboard", {
            templateUrl: "partials/dashboard.html",
            controller: "dashboardController",
            resolve: {
                factory: loginChecking
            }
        })
        .otherwise({
                templateUrl: "partials/notFound.html"
            }
        )
});


var loginChecking = function (configService, $location) {
    if(configService.getConfig().loggedIn){
        $location.path('/dashboard');
        return true;
    } else {
        $location.path('/');
        return true;
    }
}
