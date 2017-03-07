/**
 * Created by msav on 2/25/2017.
 */
var app = angular.module("dmsApp");

app.factory("modalValidationService", function (configService) {
    var firstName = $("#firstName");
    var lastName = $("#lastName");
    var username = $("#username");

    function emptyFormFields() {
        firstName.val("");
        lastName.val("");
        username.val("")
    }

    return {
        checkDataValidity: function (data) {
            if(data == undefined) {
                emptyFormFields();
                toastr.error("All fields are mandatory!", "Error");

                return false;
            }

            if(data.firstName == undefined || data.firstName.length < 3) {
                emptyFormFields();
                toastr.error("Insert first name please (min 3 characters)!", "Error");
                return false;
            }

            if(data.lastName == undefined || data.lastName.length < 3) {
                emptyFormFields();
                toastr.error("Insert last name please (min 3 characters)!", "Error");
                return false;
            }

            if(data.username == undefined || data.username.length < 4) {
                emptyFormFields();
                toastr.error("Insert username please (min 4 characters)!", "Error");
                return false;
            }
            return true;
        }
    }
});