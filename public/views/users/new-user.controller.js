(function () {
    angular
        .module("c2csms")
        .controller("newUserController", userListController);

    function userListController($route, $location, userService) {

        var model = this;

        // event handler
        model.createUser = createUser;
        model.available_roles = ["ADMIN", "INSTRUCTOR", "GUARDIAN"];

        function init() {
        }

        init();

        function createUser(user) {
            userService.createUser(user);
            $location.url('/users');
        }
    }
})
();
