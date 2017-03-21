/**
 * Created by msav on 2/16/2017.
 */
var app = angular.module("dmsApp");

app.controller('userController', function (userService, configService, modalValidationService, $location) {
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
        if (!validateData(updates)) {
            return;
        }
        vm.selectedUser.firstName = updates.firstName;
        vm.selectedUser.lastName = updates.lastName;
        vm.selectedUser.username = updates.username;
        console.log(vm.selectedUser);
        userService.updateUser(vm.selectedUser)
            .then(function (response) {
                toastr.success("Employee successfully updated!", "Success");
                loadUsers(configService.getConfig().company);
            });
    }

    vm.deleteUser = function (user) {
        userService.deleteUser(user)
            .then(function (res) {
                toastr.success("Employee successfully deleted!", "Success");
                loadUsers(configService.getConfig().company)
            });
    }

    vm.addEmployee = function (employee) {
        if (!validateData(employee)) {
            return;
        }
        employee.company = configService.getConfig().company;
        userService.addEmployee(employee)
            .then(function (response) {
                toastr.success("Employee successfully created!", "Success");
                loadUsers(configService.getConfig().company);
            })
    }

    function hasNumbers(t) {
        return /\d/.test(t);
    }

    vm.changePassword = function (newPassword, confirmPassword) {
        if(newPassword != confirmPassword) {
            toastr.error("Passwords doesn't match!");
            return;
        }
        if(newPassword == undefined || newPassword.length < 6 || !hasNumbers(newPassword)) {
            toastr.error("Password must contain at least six characters including min one numeric value!");
            return;
        }
        var user = configService.getConfig().user;
        user.password = newPassword;
        userService.changeUserPassword(user)
            .then(function (response) {
                toastr.success("Password successfully changed!", "Success");
                configService.getConfig().user = response.data;
                $location.path("/");
            });
    }

});