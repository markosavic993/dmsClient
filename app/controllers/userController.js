/**
 * Created by msav on 2/16/2017.
 */
var app = angular.module("dmsApp");

app.controller('userController', function (userService, configService, modalValidationService) {
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

    function validateData(updates) {
        return modalValidationService.checkDataValidity(updates)
    }

    vm.updateUser = function (updates) {
        if(!validateData(updates)) {
            return;
        }
        vm.selectedUser.firstName = updates.firstName;
        vm.selectedUser.lastName = updates.lastName;
        vm.selectedUser.username = updates.username;
        console.log(vm.selectedUser);
        userService.updateUser(vm.selectedUser)
            .then(function (response) {
                loadUsers(configService.getConfig().company);
            });
    }

    vm.deleteUser = function (user) {
        userService.deleteUser(user)
            .then(function (res) {
                loadUsers(configService.getConfig().company)
            });
    }

    vm.addEmployee = function (employee) {
        employee.company = configService.getConfig().company;
        userService.addEmployee(employee)
            .then(function (response) {
                loadUsers(configService.getConfig().company);
            })
    }

});