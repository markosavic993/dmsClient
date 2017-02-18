/**
 * Created by msav on 2/16/2017.
 */
var app = angular.module("dmsApp");

app.controller('userController', function (userService, configService) {
    var vm = this;
    vm.users = undefined;
    vm.selectedUser = undefined;

    var loadUsers = function (company) {
        userService.loadUsers(company.vat)
            .then(function (response) {
                vm.users = response.data;
            });
    };

    loadUsers(configService.getConfig().company);

    vm.isUserAdmin = function () {
        return configService.getConfig().user.role == 'ADMIN';
    }

    vm.setSelectedUser = function (user) {
        vm.selectedUser = user;
    }
    
    vm.updateUser = function (updates) {
        vm.selectedUser.firstName = updates.firstName;
        vm.selectedUser.lastName = updates.lastName;
        vm.selectedUser.username = updates.username;
        vm.selectedUser.role = updates.role;
        console.log(vm.selectedUser);
        userService.updateUser(vm.selectedUser)
            .then(loadUsers(configService.getConfig().company));
    }

    vm.deleteUser = function (user) {
        userService.deleteUser(user)
            .then(loadUsers(configService.getConfig().company));
    }

});