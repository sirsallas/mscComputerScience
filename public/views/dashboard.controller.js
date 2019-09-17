(function () {
    angular
        .module("c2csms")
        .controller("dashboardController", dashboardController);

    function dashboardController(currentUser, $routeParams, $location, userService) {

        var model = this;
        model.currentUser = currentUser;

        model.isGuardian = currentUser.role.includes("GUARDIAN");
        model.isInstructor = currentUser.role.includes("INSTRUCTOR") || currentUser.role.includes("ADMIN");
        model.isAdmin = currentUser.role.includes("ADMIN");
        model.logout = logout;

        function init() {

        }

        init();

        function logout() {
            userService
                .logout()
                .then(function () {
                    $location.url('/')
                })
        }

    }
})
();
