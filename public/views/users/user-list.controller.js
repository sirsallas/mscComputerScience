(function () {
    angular
        .module("c2csms")
        .controller("userListController", userListController);

    function userListController(currentUser, $route, userService) {

        var model = this;
        model.currentUser = currentUser;
        model.deleteUser = deleteUser;

        function init() {
            userService
                .findAllUsers()
                .then(function (users) {
                    model.users = users
                })
        }
        init();

        function deleteUser(userId) {
            userService
                .deleteUser(userId)
                .then(function (user) {
                    $route.reload()
                })
        }
    }
})
();