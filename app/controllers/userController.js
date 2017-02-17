/**
 * Created by msav on 2/16/2017.
 */
var app = angular.module("dmsApp");

app.controller('userController', function (userService, configService) {
    var vm = this;
    vm.users = undefined;
    vm.selectedUser = undefined;

    function initUsers() {
        vm.users = configService.getConfig().users;
    }

    var loadUsers = function (company) {
        userService.loadUsers(company.vat);
        initUsers();
    };

    loadUsers(configService.getConfig().company);

    vm.isUserAdmin = function () {
        return configService.getConfig().user.role == 'ADMIN';
    }

    vm.setSelectedUser = function (user) {
        vm.selectedUser = user;
    }

});