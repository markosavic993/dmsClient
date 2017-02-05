/**
 * Created by msav on 2/4/2017.
 */
var app = angular.module("dmsApp");

app.directive("loginForm", function () {
   return {
       restrict: 'E',
       templateUrl: "../partials/registration_form.html",
       controller: "registrationFormController"
   }
});