/**
 * Created by msav on 2/25/2017.
 */
var app = angular.module("dmsApp");

app.factory("modalValidationService", function (configService) {
    var firstName = $("#firstName");
    var lastName = $("#lastName");
    var username = $("#username");
    return {
        checkDataValidity: function (data) {
            if(data == undefined) {
                console.log(firstName)
                firstName.css("border-color", "red");
                firstName.attr("placeholder", "Insert your first name please");
                lastName.css("border-color", "red");
                lastName.attr("placeholder", "Insert your last name please");
                username.css("border-color", "red");
                username.attr("placeholder", "Insert your username please");
                return false;
            }

            if(data.firstName == undefined || data.firstName.length < 3) {
                firstName.style.borderColor = "red";
                firstName.attr("placeholder", "Insert your first name please");
                return false;
            }

            if(data.lastName == undefined || data.lastName.length < 3) {
                lastName.css("border-color", "red");
                lastName.attr("placeholder", "Insert your last name please");
                return false;
            }

            if(data.username == undefined || data.username.length < 4) {
                username.css("border-color", "red");
                username.attr("placeholder", "Insert your username please");
                return false;
            }
            $("#edit").modal("toggle");
            return true;
        }
    }
});