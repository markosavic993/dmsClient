/**
 * Created by msav on 3/11/2017.
 */
var app = angular.module("dmsApp");

app.factory("documentService", function ($http, configService) {
    return {
        getTypesForCompany: function (vat) {
            return $http.get("http://localhost:8080/document/getDocumentTypes/" + vat);
        }
    }
});