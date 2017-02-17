/**
 * Created by msav on 2/8/2017.
 */
var app = angular.module("dmsApp");

app.controller("menuController", function (configService) {
    var vm = this;

    vm.isUserAdmin = function () {
        return configService.getConfig().user.role == 'ADMIN';
    }
});